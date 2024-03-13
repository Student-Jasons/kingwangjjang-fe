import { PostCardType } from '@/types/board-type';
import { Card, CardContent, Tooltip, Typography } from '@mui/material';
import React, { useState } from 'react'
import LaunchIcon from '@mui/icons-material/Launch';
import Link from 'next/link';

export const PostCard = ({ title, url, createTime }: PostCardType) => {
    return (
        <Card className='w-screen'>
            <CardContent className="flex justify-between">
                <Tooltip title={String(createTime)} arrow>
                    <Typography variant="body2">
                        {title}
                    </Typography>
                </Tooltip>
                <Link href={url} target='_blank'>
                    <LaunchIcon />
                </Link>
            </CardContent>
        </Card>
    );
}
