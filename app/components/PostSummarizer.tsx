import React from 'react'
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { GPT } from './GPT';
interface props {
    GPTAnswer: String;
}

export const PostSummarizer = ({GPTAnswer}: props) => {
  
  return (
      <Grid container >
        <Grid xs={12}>
          <GPT text={GPTAnswer}/>
        </Grid>
      </Grid>
  );
}
