import { gql, useQuery } from '@apollo/client';

const BEST_BOARD = gql`
  query MyQuery {
    allRealtime {
      Id
      GPTAnswer
    }
  }
`;

export function BestBoard() {
  const { loading, error, data } = useQuery(BEST_BOARD);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data && data.allRealtime.map((inventory: any) => (
    <div key={inventory.id}>
      <h3>{inventory.site}</h3>
      <br />
    </div>
  ));
}
