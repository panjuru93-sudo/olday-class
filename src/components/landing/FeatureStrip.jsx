import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import EventAvailableRoundedIcon from '@mui/icons-material/EventAvailableRounded';
import ReviewsRoundedIcon from '@mui/icons-material/ReviewsRounded';
import CardGiftcardRoundedIcon from '@mui/icons-material/CardGiftcardRounded';

const FEATURES = [
  {
    icon: <SearchRoundedIcon fontSize="inherit" />,
    title: '통합 검색',
    desc: '분야·지역·날짜·가격을 교차 필터링해 원하는 클래스를 한 번에 찾습니다.',
  },
  {
    icon: <EventAvailableRoundedIcon fontSize="inherit" />,
    title: '실시간 예약',
    desc: 'DM 왕복 없이 잔여석을 확인하고 캘린더에서 바로 예약을 확정합니다.',
  },
  {
    icon: <ReviewsRoundedIcon fontSize="inherit" />,
    title: '인증 후기',
    desc: '실제 참가자만 작성할 수 있는 후기로 공방과 강사를 안심하고 고릅니다.',
  },
  {
    icon: <CardGiftcardRoundedIcon fontSize="inherit" />,
    title: '선물하기',
    desc: '클래스 이용권을 기프티콘 형태로 만들어 소중한 사람에게 선물합니다.',
  },
];

function FeatureStrip() {
  return (
    <Box component="section" sx={{ px: { xs: 2, md: 4 }, py: { xs: 6, md: 9 } }}>
      <Typography
        sx={{
          fontSize: '0.75rem',
          fontWeight: 700,
          letterSpacing: '0.1em',
          color: 'primary.main',
          mb: 1,
        }}
      >
        [ WHY OLDAY ]
      </Typography>
      <Typography
        component="h2"
        sx={{
          fontFamily: "'Black Han Sans', sans-serif",
          fontSize: { xs: '1.8rem', md: '2.6rem' },
          mb: { xs: 3, md: 5 },
        }}
      >
        왜 올데이클래스인가
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
          gap: { xs: 2.5, md: 2 },
        }}
      >
        {FEATURES.map((feature) => (
          <Box key={feature.title}>
            <Box sx={{ fontSize: '1.9rem', color: 'primary.main', mb: 1.5 }}>{feature.icon}</Box>
            <Typography component="h3" sx={{ fontWeight: 700, fontSize: '1.05rem', mb: 0.8 }}>
              {feature.title}
            </Typography>
            <Typography sx={{ fontSize: '0.86rem', color: 'text.secondary', lineHeight: 1.6 }}>
              {feature.desc}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default FeatureStrip;
