'use client'
import React from 'react'

import 'swiper/css';
import 'swiper/css/pagination';

import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { GPT } from './GPT';
interface props {
    boardUrl: string
}

export const PostSummarizer = ({boardUrl}: props) => {
  
  return (
      <Grid container spacing={2}>
        <Grid xs={12}>
          <GPT text={'test'}/>
        </Grid>
        <Grid xs={12}>
          <div className="relative" style={{ paddingTop: "56.25%"}}>
            <a href={boardUrl} />
          </div>
        </Grid>
      </Grid>
  );
}
