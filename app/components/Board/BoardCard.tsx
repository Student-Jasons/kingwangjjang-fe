"use client";

import { BoardCardType } from '@/types/board-type';
import { Card, CardContent, Tooltip, Typography } from '@mui/material';
import React, { useState } from 'react'


export const BoardCard = ( {title, url, createTime} : BoardCardType) => {
    const [showMousehover, setShowMousehover] = useState(false);
    
    return (
        <Card >
            <CardContent onMouseEnter={() => setShowMousehover(true)} onMouseLeave={() => setShowMousehover(false)}>
                <Tooltip title={String(createTime)} arrow>
                    <Typography variant="body2">
                        {title}
                    </Typography>
                </Tooltip>
            </CardContent>
        </Card>
    );
}

