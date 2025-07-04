import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import BlogPages_1 from './pages/BlogPages_1';
import BlogPages_2 from './pages/BlogPages_2';
import BlogCardPage from './pages/3BlogCardPage';
import SidebarPage from './pages/SidebarPage';

function App() {
    return (
    <Router>
      <Routes>
        <Route path="/blog/1" element={<BlogPages_1 />} />
        <Route path="/blog/2" element={<BlogPages_2 />} />
        <Route path="/blogCard" element={<BlogCardPage />} />
        <Route path="/Sidebar" element={<SidebarPage />} />
      </Routes>
    </Router>
  );
}

export default App;
