"use client";

import { PostCardType } from '@/types/board-type';
import { Card, CardContent, Tooltip, Typography } from '@mui/material';
import React, { useState } from 'react'


export const PostCard = ( {title, url, createTime} : PostCardType) => {
    return (
        <Card className='w-screen'>
            <CardContent>
                <Tooltip title={String(createTime)} arrow>
                    <Typography variant="body2">
                        {title}
                    </Typography>
                </Tooltip>
            </CardContent>
        </Card>
    );
}

