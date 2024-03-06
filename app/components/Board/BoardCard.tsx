"use client";

import { BoardCardType } from '@/types/board-type';
import { Card, CardContent, Tooltip, Typography } from '@mui/material';
import React, { useState } from 'react'


export const BoardCard = ( {title, url, createTime} : BoardCardType) => {
    return (
        <Card >
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

