import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#e5171d',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#6fa69d',
    },
    background: {
      default: '#0a0a0a',
      paper: '#141414',
    },
    text: {
      primary: '#f5f3ee',
      secondary: 'rgba(245, 243, 238, 0.68)',
    },
    divider: 'rgba(245, 243, 238, 0.12)',
  },
  shape: {
    borderRadius: 4,
  },
  typography: {
    fontFamily: "'Noto Sans KR', 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif",
    button: {
      fontWeight: 700,
      letterSpacing: '0.02em',
    },
  },
});

export default theme;
