import React from 'react'
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';

interface props {
    text: String
}

export const GPT = ({text}: props) => {
  return (
    <div>
        <SmartToyOutlinedIcon /> GPT
        <br/>
        {text}
    </div>
  )
}
