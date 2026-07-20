import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Header from '../components/common/Header.jsx';
import Footer from '../components/common/Footer.jsx';
import { useBookings } from '../hooks/useBookings.js';

/**
 * MyPage 컴포넌트
 *
 * 내가 예약한 클래스 목록을 보여주고, 각 예약을 취소할 수 있는 마이페이지입니다.
 *
 * Example usage:
 * <MyPage />
 */
function MyPage() {
  const { bookings, cancelBooking } = useBookings();

  return (
    <Box sx={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />

      <Box component="section" sx={{ px: { xs: 2, md: 4 }, py: { xs: 4, md: 6 }, flex: 1 }}>
        <Typography
          component="h1"
          sx={{
            fontFamily: "'Black Han Sans', sans-serif",
            fontSize: { xs: '1.6rem', md: '2rem' },
            mb: { xs: 3, md: 4 },
          }}
        >
          마이페이지
        </Typography>

        {bookings.length === 0 ? (
          <Box sx={{ border: '1px solid', borderColor: 'divider', p: { xs: 3, md: 4 } }}>
            <Typography sx={{ fontSize: '0.92rem', color: 'text.secondary', mb: 1.5 }}>
              예약한 클래스가 없어요.
            </Typography>
            <Typography
              component={Link}
              to="/"
              sx={{ fontSize: '0.85rem', color: 'primary.main', textDecoration: 'none' }}
            >
              클래스 둘러보기 →
            </Typography>
          </Box>
        ) : (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {bookings.map((booking) => (
              <Box
                key={booking.id}
                sx={{
                  border: '1px solid',
                  borderColor: 'divider',
                  p: { xs: 2.5, md: 3 },
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  justifyContent: 'space-between',
                  alignItems: { xs: 'flex-start', md: 'center' },
                  gap: 2,
                }}
              >
                <Box>
                  <Typography sx={{ fontSize: '1rem', fontWeight: 700, mb: 0.5 }}>
                    {booking.classTitle || '클래스 정보 없음'}
                  </Typography>
                  <Typography sx={{ fontSize: '0.85rem', color: 'text.secondary' }}>
                    {booking.date} · {booking.participants}명 · {booking.totalPrice?.toLocaleString('ko-KR')}원
                  </Typography>
                </Box>

                <Button
                  variant="outlined"
                  onClick={() => cancelBooking(booking.id)}
                  sx={{
                    borderRadius: 0,
                    borderColor: 'text.primary',
                    color: 'text.primary',
                    flexShrink: 0,
                    '&:hover': { borderColor: 'primary.main', color: 'primary.main' },
                  }}
                >
                  예약 취소
                </Button>
              </Box>
            ))}
          </Box>
        )}
      </Box>

      <Footer />
    </Box>
  );
}

export default MyPage;
