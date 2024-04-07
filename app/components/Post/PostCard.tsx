import { PostCardType } from '@/types/board-type';
import { Card, CardContent, Tooltip, Typography } from '@mui/material';
import React from 'react'
import LaunchIcon from '@mui/icons-material/Launch';
import Link from 'next/link';

interface props extends PostCardType {
    onClick: (id : String) => void;
}

export const PostCard = ({id, title, url, createTime, GPTAnswer, onClick }: props) => {
    return (
        <Card className='w-screen' onClick={()=>{onClick(id)}}>
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
