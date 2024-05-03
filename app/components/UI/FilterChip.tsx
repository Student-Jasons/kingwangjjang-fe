import { theme } from "@/app/styles/theme";
import { Box, Typography } from "@mui/material";

interface props {
    label: string
}

export const FilterChip = ({label}: props) =>{
    const width = `${label.length * 14}px`; 
    return (
        <Box sx={{
            width: width,
            height: 'fit-content',
            bgcolor: 'black',
            borderRadius: 1,
            '&:hover': {
              bgcolor: 'primary.dark',
            },
            display: 'flex', 
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Typography variant='caption' color={'white'}>
              {label}
            </Typography>
        </Box>
    )
}