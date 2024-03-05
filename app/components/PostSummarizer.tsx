import React, { useState } from 'react'

interface props {
    boardUrl: string
}

export const PostSummarizer = ({boardUrl}: props) => {
  
  return (
    <iframe className='w-full h-screen border-none' src={boardUrl} />
  )
}
