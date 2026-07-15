import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/**
 * Logo 컴포넌트
 *
 * Props:
 * @param {string} size - 마크 크기(px) [Optional, 기본값: 28]
 *
 * Example usage:
 * <Logo />
 */
function Logo({ size = 28 }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <Box
        sx={{
          position: 'relative',
          width: size,
          height: size,
          bgcolor: 'primary.main',
          flexShrink: 0,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '18%',
            bottom: '18%',
            left: '46%',
            width: '8%',
            bgcolor: 'common.white',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            left: '18%',
            right: '18%',
            top: '46%',
            height: '8%',
            bgcolor: 'common.white',
          }}
        />
      </Box>
      <Typography
        sx={{
          fontFamily: "'Black Han Sans', sans-serif",
          fontSize: `${size * 0.62}px`,
          letterSpacing: '0.01em',
          lineHeight: 1,
        }}
      >
        올데이
      </Typography>
    </Box>
  );
}

export default Logo;
