import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Header from '../components/common/Header.jsx';
import Footer from '../components/common/Footer.jsx';
import { useBookings } from '../hooks/useBookings.js';

function groupBookingsByClass(bookings) {
  const groups = new Map();

  bookings.forEach((booking) => {
    const key = booking.slug ?? booking.classTitle ?? 'unknown';
    if (!groups.has(key)) {
      groups.set(key, { slug: booking.slug, classTitle: booking.classTitle, items: [] });
    }
    groups.get(key).items.push(booking);
  });

  return Array.from(groups.values());
}

/**
 * MyPage 컴포넌트
 *
 * 내가 예약한 클래스 목록을 예약 페이지(클래스)별로 묶어서 보여주고,
 * 각 예약을 취소할 수 있는 마이페이지입니다.
 *
 * Example usage:
 * <MyPage />
 */
function MyPage() {
  const { bookings, cancelBooking } = useBookings();
  const groupedBookings = groupBookingsByClass(bookings);

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
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 4, md: 5 } }}>
            {groupedBookings.map((group) => (
              <Box key={group.slug ?? group.classTitle}>
                {group.slug ? (
                  <Typography
                    component={Link}
                    to={`/class/${group.slug}`}
                    sx={{
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      mb: 1.5,
                      display: 'inline-block',
                      color: 'text.primary',
                      textDecoration: 'none',
                      '&:hover': { color: 'primary.main' },
                    }}
                  >
                    {group.classTitle || '클래스 정보 없음'}
                  </Typography>
                ) : (
                  <Typography component="h2" sx={{ fontSize: '1.05rem', fontWeight: 700, mb: 1.5 }}>
                    {group.classTitle || '클래스 정보 없음'}
                  </Typography>
                )}

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                  {group.items.map((booking) => (
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
                      <Typography sx={{ fontSize: '0.85rem', color: 'text.secondary' }}>
                        {booking.date} · {booking.participants}명 · {booking.totalPrice?.toLocaleString('ko-KR')}원
                      </Typography>

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
