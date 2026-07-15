import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);

/**
 * PosterCard 컴포넌트
 *
 * Props:
 * @param {string} variant - 카드 스타일 'text' | 'icon' [Required]
 * @param {string} eyebrow - 브라켓 라벨 텍스트 (예: FLOWER) [Required]
 * @param {string} title - 대형 헤드라인, 줄바꿈은 개행 문자로 구분 [Optional, text variant에서 사용]
 * @param {string} caption - 하단 캡션 [Required]
 * @param {node} icon - 아이콘 엘리먼트 [Optional, icon variant에서 사용]
 *
 * Example usage:
 * <PosterCard variant="text" eyebrow="FLOWER" title={'지루하면,\n꽂아라.'} caption="꽃꽂이 원데이 클래스" />
 */
function PosterCard({ variant, eyebrow, title, caption, icon }) {
  const isText = variant === 'text';

  return (
    <MotionBox
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={{ scale: 1.02 }}
      sx={{
        position: 'relative',
        aspectRatio: '3 / 4.4',
        p: { xs: 2, md: 2.5 },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: isText ? 'space-between' : 'flex-end',
        bgcolor: isText ? 'primary.main' : 'background.paper',
        border: isText ? 'none' : '1px solid',
        borderColor: 'divider',
        color: isText ? 'primary.contrastText' : 'text.primary',
        cursor: 'pointer',
        overflow: 'hidden',
      }}
    >
      {isText ? (
        <>
          <Typography
            component="span"
            sx={{
              fontSize: '0.72rem',
              letterSpacing: '0.08em',
              fontWeight: 700,
              opacity: 0.85,
            }}
          >
            {`[ ${eyebrow} ]`}
          </Typography>
          <Typography
            component="p"
            sx={{
              fontFamily: "'Black Han Sans', sans-serif",
              fontSize: { xs: '1.7rem', md: '2rem' },
              lineHeight: 1.15,
              whiteSpace: 'pre-line',
            }}
          >
            {title}
          </Typography>
          <Typography component="span" sx={{ fontSize: '0.8rem', fontWeight: 500 }}>
            {caption}
          </Typography>
        </>
      ) : (
        <>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'primary.main',
              fontSize: { xs: '3rem', md: '3.6rem' },
              display: 'flex',
            }}
          >
            {icon}
          </Box>
          <Typography
            component="span"
            sx={{
              fontSize: '0.72rem',
              letterSpacing: '0.08em',
              fontWeight: 700,
              color: 'text.secondary',
            }}
          >
            {`[ ${eyebrow} ]`}
          </Typography>
          <Typography component="p" sx={{ fontSize: '0.95rem', fontWeight: 700 }}>
            {caption}
          </Typography>
        </>
      )}
    </MotionBox>
  );
}

export default PosterCard;
