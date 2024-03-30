import React from 'react'
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { GPT } from './GPT';
import { useGPTStore } from '@/stores/board';

export const PostSummarizer = () => {
  const { answer } = useGPTStore();
  
  return (
      <Grid container >
        <Grid xs={12}>
          <GPT text={answer}/>
        </Grid>
      </Grid>
  );
}
