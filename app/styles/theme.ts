'use client'
import { createTheme } from '@mui/material/styles';

declare module '@mui/system' {
  interface Theme {
    chip: {
      site: string;
      rank: string;
    };
  }
}

const colors = {
  grayscale: {
    gray100: '#D9D9D9',
    gray300: '#9C9C9C',
    gray500: '#666666',
    dark: '#0F0F0F',
    white: '#FFFFFF',
  },
  chip: {
    site: '#8D95A6',
    rank: '#FFFF99'
  }
};

const palette = {
    palette:{
        primary: {
            main: '#8D95A6',
            caption: '#FF6442',
        },
        secondary: {
            main: '#edf2ff',
        },
    }
}

export const theme = createTheme(
    palette,
    colors
);