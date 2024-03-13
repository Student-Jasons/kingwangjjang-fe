'use client'
import React from 'react'

import 'swiper/css';
import 'swiper/css/pagination';

import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { GPT } from './GPT';
import { Divider } from '@mui/material';
interface props {
    boardUrl: string
}

export const PostSummarizer = ({boardUrl}: props) => {
  
  return (
      <Grid container >
        <Grid xs={12}>
          <GPT text={'test'}/>
        </Grid>
        <Grid xs={12}>
          <Divider />
        </Grid>
        <Grid xs={12}>
            <a href={boardUrl}> {'Link ->'} </a>
        </Grid>
      </Grid>
  );
}
