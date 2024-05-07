import { theme } from "@/app/styles/theme";
import { FilterCollectionType } from "@/app/types/board-type";
import { Box, Chip, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

interface props {
    label: string
    setFilterCollection:Dispatch<SetStateAction<FilterCollectionType | undefined>>
}

export const FilterChip = ({label}: props) =>{

  return (
    <Chip label={label} sx={{bgcolor:'whitesmoke'}}
      onClick={()=>{
        // const site = 
        // setFilterCollection()
      }}
    />
  )
    // onClick={() => handleFilter(site)}
    //     <Box sx={{
    //         width: width,
    //         height: 'fit-content',
    //         bgcolor: 'black',
    //         borderRadius: 1,
    //         '&:hover': {
    //           bgcolor: 'primary.dark',
    //         },
    //         display: 'flex', 
    //         alignItems: 'center',
    //         justifyContent: 'center',
    //       }}>
    //         <Typography variant='caption' color={'white'}>
    //           {label}
    //         </Typography>
    //     </Box>
    // )
}