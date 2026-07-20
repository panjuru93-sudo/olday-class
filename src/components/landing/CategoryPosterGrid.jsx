import { Fragment } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CATEGORIES } from '../../data/categories.jsx';
import PosterCard from '../ui/PosterCard.jsx';

function CategoryPosterGrid() {
  return (
    <Box id="category-grid" component="section" sx={{ px: { xs: 2, md: 4 }, py: { xs: 6, md: 9 } }}>
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
          <Fragment key={category.slug}>
            <PosterCard
              variant="text"
              to={`/class/${category.slug}`}
              eyebrow={category.eyebrow}
              title={category.posterTitle}
              caption={category.categoryLabel}
            />
            <PosterCard
              variant="icon"
              to={`/class/${category.slug}`}
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
