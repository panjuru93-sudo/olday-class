import { Fragment } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LocalFloristRoundedIcon from '@mui/icons-material/LocalFloristRounded';
import CakeRoundedIcon from '@mui/icons-material/CakeRounded';
import DiamondRoundedIcon from '@mui/icons-material/DiamondRounded';
import MusicNoteRoundedIcon from '@mui/icons-material/MusicNoteRounded';
import CelebrationRoundedIcon from '@mui/icons-material/CelebrationRounded';
import SpaRoundedIcon from '@mui/icons-material/SpaRounded';
import TheaterComedyRoundedIcon from '@mui/icons-material/TheaterComedyRounded';
import LocalActivityRoundedIcon from '@mui/icons-material/LocalActivityRounded';
import PosterCard from '../ui/PosterCard.jsx';

const CATEGORIES = [
  {
    key: 'flower',
    eyebrow: 'FLOWER',
    title: '지루하면,\n꽂아라.',
    caption: '꽃꽂이 원데이 클래스',
    browseCaption: '꽃꽂이 클래스 보러가기',
    icon: <LocalFloristRoundedIcon fontSize="inherit" />,
  },
  {
    key: 'baking',
    eyebrow: 'BAKING',
    title: '무기력하면,\n구워라.',
    caption: '베이킹 원데이 클래스',
    browseCaption: '베이킹 클래스 보러가기',
    icon: <CakeRoundedIcon fontSize="inherit" />,
  },
  {
    key: 'glass',
    eyebrow: 'GLASS ART',
    title: '밋밋하면,\n녹여라.',
    caption: '글라스아트 원데이 클래스',
    browseCaption: '글라스아트 클래스 보러가기',
    icon: <DiamondRoundedIcon fontSize="inherit" />,
  },
  {
    key: 'dance',
    eyebrow: 'DANCE',
    title: '몸이 굳으면,\n흔들어라.',
    caption: '댄스 원데이 클래스',
    browseCaption: '댄스 클래스 보러가기',
    icon: <MusicNoteRoundedIcon fontSize="inherit" />,
  },
  {
    key: 'solo-party',
    eyebrow: 'SOLO PARTY',
    title: '혼자라면,\n나와라.',
    caption: '솔로파티 원데이 클래스',
    browseCaption: '솔로파티 보러가기',
    icon: <CelebrationRoundedIcon fontSize="inherit" />,
  },
  {
    key: 'beauty',
    eyebrow: 'BEAUTY',
    title: '칙칙하면,\n빛내라.',
    caption: '뷰티 원데이 클래스',
    browseCaption: '뷰티 클래스 보러가기',
    icon: <SpaRoundedIcon fontSize="inherit" />,
  },
  {
    key: 'theater',
    eyebrow: 'THEATER',
    title: '답답하면,\n연기하라.',
    caption: '연극 원데이 클래스',
    browseCaption: '연극 클래스 보러가기',
    icon: <TheaterComedyRoundedIcon fontSize="inherit" />,
  },
  {
    key: 'activity',
    eyebrow: 'ACTIVITY',
    title: '지친다면,\n뛰어라.',
    caption: '액티비티 원데이 클래스',
    browseCaption: '액티비티 보러가기',
    icon: <LocalActivityRoundedIcon fontSize="inherit" />,
  },
];

function CategoryPosterGrid() {
  return (
    <Box component="section" sx={{ px: { xs: 2, md: 4 }, py: { xs: 6, md: 9 } }}>
      <Typography
        sx={{
          fontSize: '0.75rem',
          fontWeight: 700,
          letterSpacing: '0.1em',
          color: 'primary.main',
          mb: 1,
        }}
      >
        [ CATEGORY ]
      </Typography>
      <Typography
        component="h2"
        sx={{
          fontFamily: "'Black Han Sans', sans-serif",
          fontSize: { xs: '1.8rem', md: '2.6rem' },
          mb: { xs: 3, md: 5 },
        }}
      >
        무엇을 만들어볼까
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
          gap: { xs: 1, md: 1.5 },
        }}
      >
        {CATEGORIES.map((category) => (
          <Fragment key={category.key}>
            <PosterCard
              variant="text"
              eyebrow={category.eyebrow}
              title={category.title}
              caption={category.caption}
            />
            <PosterCard
              variant="icon"
              eyebrow={category.eyebrow}
              caption={category.browseCaption}
              icon={category.icon}
            />
          </Fragment>
        ))}
      </Box>
    </Box>
  );
}

export default CategoryPosterGrid;
