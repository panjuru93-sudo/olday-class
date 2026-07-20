import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Header from '../components/common/Header.jsx';
import Footer from '../components/common/Footer.jsx';

const BENEFITS = [
  {
    title: '나만의 클래스 개설',
    description: '내가 잘하는 것을 원데이 클래스로 만들어 참가자를 모집하세요.',
  },
  {
    title: '자유로운 일정 운영',
    description: '원하는 날짜와 시간에만 클래스를 열 수 있어요.',
  },
  {
    title: '수익 정산 지원',
    description: '예약과 정산을 올데이가 관리해드립니다.',
  },
];

/**
 * HostApply 컴포넌트
 *
 * 올데이 클래스의 호스트로 지원할 수 있는 안내 페이지입니다.
 *
 * Example usage:
 * <HostApply />
 */
function HostApply() {
  return (
    <Box sx={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />

      <Box component="section" sx={{ px: { xs: 2, md: 4 }, py: { xs: 6, md: 10 }, flex: 1 }}>
        <Typography
          sx={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', color: 'primary.main', mb: 1 }}
        >
          [ HOST ]
        </Typography>
        <Typography
          component="h1"
          sx={{
            fontFamily: "'Black Han Sans', sans-serif",
            fontSize: { xs: '2rem', md: '3rem' },
            lineHeight: 1.2,
            mb: { xs: 3, md: 4 },
            textWrap: 'balance',
          }}
        >
          당신의 하루를
          <br />
          클래스로 만들어보세요
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: { xs: 2, md: 3 },
            mb: { xs: 5, md: 6 },
          }}
        >
          {BENEFITS.map((benefit) => (
            <Box key={benefit.title} sx={{ border: '1px solid', borderColor: 'divider', p: { xs: 2.5, md: 3 } }}>
              <Typography sx={{ fontSize: '1rem', fontWeight: 700, mb: 1 }}>{benefit.title}</Typography>
              <Typography sx={{ fontSize: '0.85rem', color: 'text.secondary', lineHeight: 1.6 }}>
                {benefit.description}
              </Typography>
            </Box>
          ))}
        </Box>

        <Button variant="contained" color="primary" size="large" sx={{ borderRadius: 0, px: { xs: 3, md: 5 } }}>
          호스트 지원하기
        </Button>
        <Typography sx={{ fontSize: '0.8rem', color: 'text.secondary', mt: 1.5 }}>
          지원서 접수는 준비 중입니다. 빠른 시일 내에 안내드릴게요.
        </Typography>
      </Box>

      <Footer />
    </Box>
  );
}

export default HostApply;
