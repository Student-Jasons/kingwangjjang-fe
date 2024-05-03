import { Chip, List, ListItem, Stack, Typography } from '@mui/material'
import React from 'react'
import { FilteredData } from '@/types/board-type'

export const Filter = (filteredData: FilteredData) => {
    return (
        <>
        <List>
            <ListItem>
            <Typography variant="body1" color={"gray"} component="div">
                필터
            </Typography>
            </ListItem>
        </List><List>
            <Stack direction="row" spacing={1} paddingX="8px">
            {filteredData.site.map((site) => (
                <Chip key={site} label={site}/> 
                //  onClick={() => handleFilter(site)} />
                ))}
            </Stack>
        </List>
        </>
    )
}
