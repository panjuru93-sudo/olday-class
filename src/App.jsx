import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import ClassDetail from './pages/ClassDetail.jsx';
import MyPage from './pages/MyPage.jsx';
import ScrollToTop from './components/common/ScrollToTop.jsx';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/class/:slug" element={<ClassDetail />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </>
  );
}

export default App;
