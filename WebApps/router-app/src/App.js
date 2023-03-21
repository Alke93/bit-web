import { Navigate } from 'react-router-dom';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Contact from './components/Contact';
import NoPage from './components/NoPage';
import Home from './components/Home';
import Blogs from './components/Blogs';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact/:name" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
          <Route path="test" element={<Navigate to='/blogs' />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;