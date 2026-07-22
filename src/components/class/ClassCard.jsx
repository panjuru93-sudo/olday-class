import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/**
 * ClassCard 컴포넌트
 *
 * 클래스 목록에서 사용하는 카드 UI입니다. 클릭 시 해당 클래스의 상세 페이지로 이동합니다.
 *
 * Props:
 * @param {object} category - 클래스 정보 (slug, icon, eyebrow, detailTitle, duration, location, price) [Required]
 *
 * Example usage:
 * <ClassCard category={category} />
 */
function ClassCard({ category }) {
  return (
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
      <Typography sx={{ fontSize: '1.05rem', fontWeight: 700, mb: 1 }}>{category.detailTitle}</Typography>
      <Typography sx={{ fontSize: '0.82rem', color: 'text.secondary', mb: 1.5 }}>
        {category.duration} · {category.location}
      </Typography>
      <Typography sx={{ fontSize: '0.95rem', fontWeight: 700 }}>
        {category.price.toLocaleString('ko-KR')}원~
      </Typography>
    </Box>
  );
}

export default ClassCard;
