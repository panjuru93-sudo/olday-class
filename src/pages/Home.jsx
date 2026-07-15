import Box from '@mui/material/Box';
import Header from '../components/common/Header.jsx';
import Footer from '../components/common/Footer.jsx';
import Hero from '../components/landing/Hero.jsx';
import MarqueeBand from '../components/landing/MarqueeBand.jsx';
import CategoryPosterGrid from '../components/landing/CategoryPosterGrid.jsx';
import FeatureStrip from '../components/landing/FeatureStrip.jsx';

function Home() {
  return (
    <Box sx={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Hero />
      <MarqueeBand />
      <CategoryPosterGrid />
      <FeatureStrip />
      <Footer />
    </Box>
  );
}

export default Home;
