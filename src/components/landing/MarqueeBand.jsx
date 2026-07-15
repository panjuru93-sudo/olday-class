import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const REPEAT_COUNT = 6;
const PHRASE = '올데이 클래스 · 오늘 하루, 다르게 ·';

function MarqueeBand() {
  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        color: 'primary.contrastText',
        overflow: 'hidden',
        py: { xs: 1.1, md: 1.5 },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          width: 'max-content',
          animation: 'marquee 22s linear infinite',
          '@keyframes marquee': {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(-50%)' },
          },
          '@media (prefers-reduced-motion: reduce)': {
            animation: 'none',
          },
        }}
      >
        {[0, 1].map((half) => (
          <Box key={half} sx={{ display: 'flex' }}>
            {Array.from({ length: REPEAT_COUNT }).map((_, i) => (
              <Typography
                key={i}
                component="span"
                sx={{
                  fontFamily: "'Black Han Sans', sans-serif",
                  fontSize: { xs: '1.1rem', md: '1.4rem' },
                  px: { xs: 2, md: 3 },
                  whiteSpace: 'nowrap',
                }}
              >
                {PHRASE}
              </Typography>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default MarqueeBand;
