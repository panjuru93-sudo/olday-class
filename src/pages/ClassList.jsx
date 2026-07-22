import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Header from '../components/common/Header.jsx';
import Footer from '../components/common/Footer.jsx';
import ClassCard from '../components/class/ClassCard.jsx';
import { CATEGORIES } from '../data/categories.jsx';
import { useHostClasses } from '../hooks/useHostClasses.js';
import { mapHostClassToCategory } from '../utils/mapHostClass.jsx';

/**
 * groupClassesByCategory 함수
 *
 * 기본 카테고리와 호스트 클래스를 같은 종류(카테고리)끼리 묶어줍니다.
 * 기본 카테고리 순서를 그룹 순서로 사용하고, 기본 카테고리에 없는
 * 호스트 전용 카테고리는 등장한 순서대로 뒤에 이어붙입니다.
 *
 * @param {Array} mappedHostClasses - mapHostClassToCategory로 변환된 호스트 클래스 목록 [Required]
 *
 * Example usage:
 * const groups = groupClassesByCategory(hostClasses.map(mapHostClassToCategory));
 */
function groupClassesByCategory(mappedHostClasses) {
  const groups = new Map();

  CATEGORIES.forEach((category) => {
    groups.set(category.slug, { key: category.slug, label: category.categoryLabel, items: [category] });
  });

  mappedHostClasses.forEach((hostClass) => {
    const key = groups.has(hostClass.categorySlug) ? hostClass.categorySlug : hostClass.slug;

    if (!groups.has(key)) {
      groups.set(key, { key, label: hostClass.categoryLabel, items: [] });
    }
    groups.get(key).items.push(hostClass);
  });

  return Array.from(groups.values());
}

/**
 * ClassList 컴포넌트
 *
 * 전체 클래스를 한 페이지에서 둘러보고 고를 수 있는 목록 페이지입니다.
 * 기본 제공 클래스와 호스트가 등록한 클래스를 함께 보여줍니다.
 *
 * Example usage:
 * <ClassList />
 */
function ClassList() {
  const { hostClasses } = useHostClasses();
  const groupedClasses = groupClassesByCategory(hostClasses.map(mapHostClassToCategory));

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

        {groupedClasses.map((group) => (
          <Box key={group.key} component="section" sx={{ mb: { xs: 4, md: 5 } }}>
            <Typography
              component="h2"
              sx={{ fontSize: { xs: '1.05rem', md: '1.2rem' }, fontWeight: 700, mb: { xs: 1.5, md: 2 } }}
            >
              {group.label}
            </Typography>

            <Grid container spacing={{ xs: 2, md: 3 }}>
              {group.items.map((category) => (
                <Grid key={category.slug} size={{ xs: 12, sm: 6, md: 4 }}>
                  <ClassCard category={category} />
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Box>

      <Footer />
    </Box>
  );
}

export default ClassList;
