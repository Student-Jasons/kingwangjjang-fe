import { Box, Typography } from "@mui/material";

interface props {
    label: string
}

const Chip = ({label}: props) =>{
    const width = `${label.length * 14}px`; 
    return (
        <Box sx={{
            width: width,
            height: 'fit-content',
            borderRadius: 1,
            bgcolor: 'RGB(201, 201, 201)',
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

export default Chip
