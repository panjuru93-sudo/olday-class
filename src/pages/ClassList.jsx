import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Header from '../components/common/Header.jsx';
import Footer from '../components/common/Footer.jsx';
import { CATEGORIES } from '../data/categories.jsx';

/**
 * ClassList 컴포넌트
 *
 * 전체 클래스를 한 페이지에서 둘러보고 고를 수 있는 목록 페이지입니다.
 *
 * Example usage:
 * <ClassList />
 */
function ClassList() {
  return (
    <Box sx={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />

      <Box component="section" sx={{ px: { xs: 2, md: 4 }, py: { xs: 4, md: 6 }, flex: 1 }}>
        <Typography
          sx={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', color: 'primary.main', mb: 1 }}
        >
          [ ALL CLASS ]
        </Typography>
        <Typography
          component="h1"
          sx={{
            fontFamily: "'Black Han Sans', sans-serif",
            fontSize: { xs: '1.8rem', md: '2.6rem' },
            mb: { xs: 3, md: 5 },
          }}
        >
          전체 클래스 둘러보기
        </Typography>

        <Grid container spacing={{ xs: 2, md: 3 }}>
          {CATEGORIES.map((category) => (
            <Grid key={category.slug} size={{ xs: 12, sm: 6, md: 4 }}>
              <Box
                component={Link}
                to={`/class/${category.slug}`}
                sx={{
                  display: 'block',
                  height: '100%',
                  textDecoration: 'none',
                  color: 'text.primary',
                  border: '1px solid',
                  borderColor: 'divider',
                  p: { xs: 2.5, md: 3 },
                  '&:hover': { borderColor: 'primary.main' },
                }}
              >
                <Box sx={{ fontSize: '2.2rem', color: 'primary.main', mb: 1.5 }}>{category.icon}</Box>
                <Typography
                  sx={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', color: 'primary.main', mb: 0.5 }}
                >
                  {`[ ${category.eyebrow} ]`}
                </Typography>
                <Typography sx={{ fontSize: '1.05rem', fontWeight: 700, mb: 1 }}>
                  {category.detailTitle}
                </Typography>
                <Typography sx={{ fontSize: '0.82rem', color: 'text.secondary', mb: 1.5 }}>
                  {category.duration} · {category.location}
                </Typography>
                <Typography sx={{ fontSize: '0.95rem', fontWeight: 700 }}>
                  {category.price.toLocaleString('ko-KR')}원~
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Footer />
    </Box>
  );
}

export default ClassList;
