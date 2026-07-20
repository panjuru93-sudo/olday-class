import { useParams, Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Header from '../components/common/Header.jsx';
import Footer from '../components/common/Footer.jsx';
import BookingPanel from '../components/detail/BookingPanel.jsx';
import ReviewList from '../components/detail/ReviewList.jsx';
import { getCategoryBySlug } from '../data/categories.jsx';

function ClassDetail() {
  const { slug } = useParams();
  const category = getCategoryBySlug(slug);

  if (!category) {
    return (
      <Box sx={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header />
        <Box sx={{ px: { xs: 2, md: 4 }, py: { xs: 8, md: 12 } }}>
          <Typography component="h1" sx={{ fontSize: '1.4rem', fontWeight: 700, mb: 1.5 }}>
            존재하지 않는 클래스입니다
          </Typography>
          <Typography
            component={Link}
            to="/"
            sx={{ fontSize: '0.9rem', color: 'primary.main', textDecoration: 'none' }}
          >
            ← 전체 클래스 보기
          </Typography>
        </Box>
        <Footer />
      </Box>
    );
  }

  const { eyebrow, detailTitle, categoryLabel, icon, price, duration, location, host, description, schedule, reviews } =
    category;

  return (
    <Box sx={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />

      <Box component="section" sx={{ px: { xs: 2, md: 4 }, pt: { xs: 4, md: 6 } }}>
        <Typography
          component={Link}
          to="/"
          sx={{ fontSize: '0.8rem', color: 'text.secondary', textDecoration: 'none' }}
        >
          ← 전체 클래스 보기
        </Typography>

        <Box
          sx={{
            mt: { xs: 3, md: 4 },
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1.6fr 1fr' },
            gap: { xs: 4, md: 6 },
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                color: 'primary.main',
                mb: 1,
              }}
            >
              {`[ ${eyebrow} ]`}
            </Typography>
            <Typography
              component="h1"
              sx={{
                fontFamily: "'Black Han Sans', sans-serif",
                fontSize: { xs: '1.9rem', md: '2.6rem' },
                lineHeight: 1.2,
                mb: 1,
                textWrap: 'balance',
              }}
            >
              {detailTitle}
            </Typography>
            <Typography sx={{ fontSize: '0.9rem', color: 'text.secondary', mb: { xs: 4, md: 5 } }}>
              {categoryLabel}
            </Typography>

            <Box
              sx={{
                bgcolor: 'background.paper',
                border: '1px solid',
                borderColor: 'divider',
                aspectRatio: { xs: '16 / 9', md: '16 / 7' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'primary.main',
                fontSize: { xs: '4rem', md: '5.5rem' },
                mb: { xs: 4, md: 5 },
              }}
            >
              {icon}
            </Box>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 2,
                mb: { xs: 4, md: 5 },
              }}
            >
              <Box>
                <Typography sx={{ fontSize: '0.72rem', color: 'text.secondary', mb: 0.4 }}>
                  소요시간
                </Typography>
                <Typography sx={{ fontSize: '0.92rem', fontWeight: 700 }}>{duration}</Typography>
              </Box>
              <Box>
                <Typography sx={{ fontSize: '0.72rem', color: 'text.secondary', mb: 0.4 }}>
                  장소
                </Typography>
                <Typography sx={{ fontSize: '0.92rem', fontWeight: 700 }}>{location}</Typography>
              </Box>
              <Box>
                <Typography sx={{ fontSize: '0.72rem', color: 'text.secondary', mb: 0.4 }}>
                  호스트
                </Typography>
                <Typography sx={{ fontSize: '0.92rem', fontWeight: 700 }}>{host}</Typography>
              </Box>
            </Box>

            <Typography sx={{ fontSize: '0.95rem', color: 'text.secondary', lineHeight: 1.7, mb: { xs: 5, md: 6 } }}>
              {description}
            </Typography>

            <Typography
              component="h2"
              sx={{ fontFamily: "'Black Han Sans', sans-serif", fontSize: '1.3rem', mb: 2 }}
            >
              후기
            </Typography>
            <ReviewList reviews={reviews} />
          </Box>

          <Box sx={{ position: { md: 'sticky' }, top: { md: '90px' }, alignSelf: 'flex-start' }}>
            <BookingPanel
              price={price}
              schedule={schedule}
              classSlug={category.slug}
              classTitle={detailTitle}
            />
          </Box>
        </Box>
      </Box>

      <Box sx={{ mt: { xs: 8, md: 10 } }}>
        <Footer />
      </Box>
    </Box>
  );
}

export default ClassDetail;
