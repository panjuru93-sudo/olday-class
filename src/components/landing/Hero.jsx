import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { motion } from 'framer-motion';

const MotionTypography = motion.create(Typography);

function Hero() {
  return (
    <Box
      component="section"
      sx={{
        px: { xs: 2, md: 4 },
        pt: { xs: 6, md: 10 },
        pb: { xs: 6, md: 8 },
      }}
    >
      <MotionTypography
        component="p"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        sx={{
          fontSize: '0.75rem',
          fontWeight: 700,
          letterSpacing: '0.1em',
          color: 'primary.main',
          mb: { xs: 2, md: 3 },
        }}
      >
        [ 하루의 방정식을 바꿔라 ]
      </MotionTypography>

      <MotionTypography
        component="h1"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        sx={{
          fontFamily: "'Black Han Sans', sans-serif",
          fontSize: { xs: '2.6rem', sm: '3.4rem', md: '5rem' },
          lineHeight: 1.08,
          letterSpacing: '-0.01em',
          textWrap: 'balance',
        }}
      >
        오늘 하루,
        <br />
        다르게 만들어라.
      </MotionTypography>

      <Typography
        sx={{
          mt: { xs: 2.5, md: 3 },
          fontSize: { xs: '0.95rem', md: '1.1rem' },
          color: 'text.secondary',
          maxWidth: '38em',
        }}
      >
        꽃꽂이부터 액티비티까지 — 전국의 원데이 클래스를 한 곳에서 검색하고 바로
        예약하세요.
      </Typography>

      <Stack direction="row" spacing={1.5} sx={{ mt: { xs: 3, md: 4 } }}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ borderRadius: 0, px: { xs: 2.5, md: 4 } }}
        >
          클래스 둘러보기
        </Button>
        <Button
          variant="outlined"
          size="large"
          sx={{
            borderRadius: 0,
            px: { xs: 2.5, md: 4 },
            borderColor: 'text.primary',
            color: 'text.primary',
            '&:hover': { borderColor: 'primary.main', color: 'primary.main' },
          }}
        >
          호스트로 시작하기
        </Button>
      </Stack>
    </Box>
  );
}

export default Hero;
