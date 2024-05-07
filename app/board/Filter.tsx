import { Chip, List, ListItem, Stack, Typography } from '@mui/material'
import React, { Dispatch, SetStateAction } from 'react'
import { FilterCollectionType } from '@/types/board-type'
import { FilterChip } from '@/components/UI/FilterChip'

interface props {
    filteredData: FilterCollectionType | undefined
    setFilterCollection: Dispatch<SetStateAction<FilterCollectionType | undefined>>
}

export const Filter = ({filteredData, setFilterCollection}: props) => {
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
            {filteredData && filteredData.site.map((site, index) => (
                <FilterChip setFilterCollection={setFilterCollection} key={index} label={site}/> 
                ))}
            </Stack>
        </List>
        </>
    )
}
