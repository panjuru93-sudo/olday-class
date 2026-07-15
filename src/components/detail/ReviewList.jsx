import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import StarRoundedIcon from '@mui/icons-material/StarRounded';

/**
 * ReviewList 컴포넌트
 *
 * Props:
 * @param {Array<{name: string, rating: number, comment: string}>} reviews - 후기 목록 [Required]
 *
 * Example usage:
 * <ReviewList reviews={[{ name: 'user1', rating: 5, comment: '좋아요' }]} />
 */
function ReviewList({ reviews }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {reviews.map((review) => (
        <Box
          key={review.name}
          sx={{ borderBottom: '1px solid', borderColor: 'divider', pb: 2 }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.6 }}>
            <Typography component="span" sx={{ fontWeight: 700, fontSize: '0.88rem' }}>
              {review.name}
            </Typography>
            <Box sx={{ display: 'flex', color: 'primary.main' }}>
              {Array.from({ length: review.rating }).map((_, i) => (
                <StarRoundedIcon key={i} sx={{ fontSize: '1rem' }} />
              ))}
            </Box>
          </Box>
          <Typography sx={{ fontSize: '0.86rem', color: 'text.secondary' }}>
            {review.comment}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

export default ReviewList;
