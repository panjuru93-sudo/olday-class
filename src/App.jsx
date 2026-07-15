import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import ClassDetail from './pages/ClassDetail.jsx';
import ScrollToTop from './components/common/ScrollToTop.jsx';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/class/:slug" element={<ClassDetail />} />
      </Routes>
    </>
  );
}

export default App;
