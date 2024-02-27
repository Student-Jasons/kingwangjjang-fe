
import { BoardCardType } from '@/types/board-type';
import { Card, CardContent, Typography } from '@mui/material';
import React, { useState } from 'react'


export const BoardCard = ( {title, url, createTime} : BoardCardType) => {
    const [showMousehover, setShowMousehover] = useState(false);
    
    return (
        <Card >
            <CardContent onMouseEnter={() => setShowMousehover(true)} onMouseLeave={() => setShowMousehover(false)}>
                <Typography variant="body2">
                    {title}
                </Typography>
                {showMousehover && (
                    <Typography variant="caption">
                        {String(createTime)}
                    </Typography>
                )}
            </CardContent>
        </Card>
    );
}

