import { Chip } from "@mui/material";

interface props {
    label: string;
    onClick: (label: string) => void;
    filterItems: string[];
}

export const FilterChip = ({label, onClick, filterItems}: props) =>{
     const isFiltered = filterItems.includes(label);
     const chipColor = isFiltered ? "primary" : undefined;
 
     return (
         <Chip color={chipColor} label={label} onClick={() => { onClick(label) }} />
     );
}