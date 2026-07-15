import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

const MIN_PARTICIPANTS = 1;
const MAX_PARTICIPANTS = 6;

/**
 * BookingPanel 컴포넌트
 *
 * Props:
 * @param {number} price - 1인 참가비(원) [Required]
 * @param {Array<string>} schedule - 예약 가능한 일정 목록 [Required]
 *
 * Example usage:
 * <BookingPanel price={60000} schedule={['7월 19일(토) 14:00']} />
 */
function BookingPanel({ price, schedule }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [participantCount, setParticipantCount] = useState(MIN_PARTICIPANTS);
  const [isBooked, setIsBooked] = useState(false);

  const totalPrice = price * participantCount;

  if (isBooked) {
    return (
      <Box
        sx={{
          bgcolor: 'background.paper',
          border: '1px solid',
          borderColor: 'divider',
          p: { xs: 2.5, md: 3 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: 1,
        }}
      >
        <CheckCircleRoundedIcon sx={{ color: 'primary.main', fontSize: '2rem' }} />
        <Typography component="p" sx={{ fontWeight: 700, fontSize: '1.05rem' }}>
          예약이 접수되었습니다
        </Typography>
        <Typography sx={{ fontSize: '0.86rem', color: 'text.secondary' }}>
          {selectedDate} 일정으로 {participantCount}명 예약 요청을 받았어요. 호스트가 확인 후
          안내드릴게요.
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        border: '1px solid',
        borderColor: 'divider',
        p: { xs: 2.5, md: 3 },
      }}
    >
      <Typography sx={{ fontSize: '1.6rem', fontWeight: 700 }}>
        {totalPrice.toLocaleString('ko-KR')}원
      </Typography>
      <Typography sx={{ fontSize: '0.78rem', color: 'text.secondary', mb: 2 }}>
        {price.toLocaleString('ko-KR')}원 × {participantCount}명
      </Typography>

      <Typography sx={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.04em', mb: 1 }}>
        인원
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1.5,
          mb: 2.5,
        }}
      >
        <IconButton
          size="small"
          onClick={() => setParticipantCount((count) => Math.max(MIN_PARTICIPANTS, count - 1))}
          disabled={participantCount <= MIN_PARTICIPANTS}
          sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 0 }}
        >
          <RemoveRoundedIcon fontSize="small" />
        </IconButton>
        <Typography sx={{ fontSize: '0.95rem', fontWeight: 700, minWidth: '2ch', textAlign: 'center' }}>
          {participantCount}명
        </Typography>
        <IconButton
          size="small"
          onClick={() => setParticipantCount((count) => Math.min(MAX_PARTICIPANTS, count + 1))}
          disabled={participantCount >= MAX_PARTICIPANTS}
          sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 0 }}
        >
          <AddRoundedIcon fontSize="small" />
        </IconButton>
      </Box>

      <Typography sx={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.04em', mb: 1 }}>
        일정 선택
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.8, mb: 2.5 }}>
        {schedule.map((date) => {
          const selected = date === selectedDate;
          return (
            <Box
              key={date}
              component="button"
              type="button"
              onClick={() => setSelectedDate(date)}
              sx={{
                textAlign: 'left',
                font: 'inherit',
                fontSize: '0.85rem',
                fontWeight: selected ? 700 : 500,
                color: selected ? 'primary.contrastText' : 'text.primary',
                bgcolor: selected ? 'primary.main' : 'transparent',
                border: '1px solid',
                borderColor: selected ? 'primary.main' : 'divider',
                px: 1.5,
                py: 1,
                cursor: 'pointer',
              }}
            >
              {date}
            </Box>
          );
        })}
      </Box>

      <Button
        fullWidth
        variant="contained"
        color="primary"
        size="large"
        disabled={!selectedDate}
        onClick={() => setIsBooked(true)}
        sx={{ borderRadius: 0 }}
      >
        예약하기
      </Button>
    </Box>
  );
}

export default BookingPanel;
