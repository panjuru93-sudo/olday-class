import { useParams, Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Header from '../components/common/Header.jsx';
import Footer from '../components/common/Footer.jsx';
import ClassCard from '../components/class/ClassCard.jsx';
import { getCategoryBySlug } from '../data/categories.jsx';
import { useHostClasses } from '../hooks/useHostClasses.js';
import { mapHostClassToCategory } from '../utils/mapHostClass.jsx';

/**
 * CategoryClasses 컴포넌트
 *
 * 헤더 카테고리 메뉴(꽃꽂이, 베이킹 등)를 눌렀을 때, 같은 종류의 클래스를
 * 모아서 보여주는 목록 페이지입니다.
 *
 * Example usage:
 * <CategoryClasses />
 */
function CategoryClasses() {
  const { slug } = useParams();
  const baseCategory = getCategoryBySlug(slug);
  const { hostClasses } = useHostClasses();
  const matchingHostClasses = hostClasses
    .map(mapHostClassToCategory)
    .filter((hostClass) => hostClass.categorySlug === slug);
  const items = baseCategory ? [baseCategory, ...matchingHostClasses] : matchingHostClasses;
  const categoryLabel = baseCategory?.categoryLabel ?? matchingHostClasses[0]?.categoryLabel ?? '클래스';
  const eyebrow = baseCategory?.eyebrow ?? 'CLASS';

  return (
    <Box sx={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />

      <Box component="section" sx={{ px: { xs: 2, md: 4 }, py: { xs: 4, md: 6 }, flex: 1 }}>
        <Typography
          component={Link}
          to="/classes"
          sx={{
            display: 'inline-block',
            fontSize: '0.8rem',
            color: 'text.secondary',
            textDecoration: 'none',
            mb: { xs: 2, md: 3 },
          }}
        >
          ← 전체 클래스 보기
        </Typography>

        <Typography
          sx={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', color: 'primary.main', mb: 1 }}
        >
          {`[ ${eyebrow} ]`}
        </Typography>
        <Typography
          component="h1"
          sx={{
            fontFamily: "'Black Han Sans', sans-serif",
            fontSize: { xs: '1.8rem', md: '2.6rem' },
            mb: { xs: 3, md: 5 },
          }}
        >
          {categoryLabel}
        </Typography>

        {items.length === 0 ? (
          <Typography sx={{ fontSize: '0.9rem', color: 'text.secondary' }}>등록된 클래스가 없어요.</Typography>
        ) : (
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {items.map((category) => (
              <Grid key={category.slug} size={{ xs: 12, sm: 6, md: 4 }}>
                <ClassCard category={category} />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>

      <Footer />
    </Box>
  );
}

export default CategoryClasses;
