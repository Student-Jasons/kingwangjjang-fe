'use client'
import React from 'react'

import 'swiper/css';
import 'swiper/css/pagination';

import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { GPT } from './GPT';
import { Divider } from '@mui/material';
interface props {
    GPTAnswer: string
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
