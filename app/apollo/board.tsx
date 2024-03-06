import { useQuery } from "@apollo/client";
import { gql } from '../__generated__/gql';

const BEST_BOARD: any = gql(`
    query AllRealtime {
        allRealtime {
            id
            site
        }
    }`)

export function BestBoard() {
    const { loading, error, data } = useQuery(BEST_BOARD);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
  
    return data && data.allRealtime.map((inventory: any) => (
      <div key={inventory.id}>
        <h3>{inventory.name}</h3>
        <h3>{inventory.site}</h3>
        <br />
      </div>
    ));
  }