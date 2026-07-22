import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import ClassList from './pages/ClassList.jsx';
import CategoryClasses from './pages/CategoryClasses.jsx';
import ClassDetail from './pages/ClassDetail.jsx';
import MyPage from './pages/MyPage.jsx';
import HostApply from './pages/HostApply.jsx';
import ScrollToTop from './components/common/ScrollToTop.jsx';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classes" element={<ClassList />} />
        <Route path="/category/:slug" element={<CategoryClasses />} />
        <Route path="/class/:slug" element={<ClassDetail />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/host" element={<HostApply />} />
      </Routes>
    </>
  );
}

export default App;
