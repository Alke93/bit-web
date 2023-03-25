import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import { Header } from './components/Header';
import { AddCourse } from './components/AddCourse';
import { AddStudent } from './components/AddStudent';
import { NotFound } from './components/NotFound';
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='home' element={<Home />} />
        <Route path='add-course' element={<AddCourse />} />
        <Route path='edit-course/:id' element={<AddCourse />} />
        <Route path='add-student' element={<AddStudent />} />
        <Route path='edit-student/:id' element={<AddStudent />} />
        <Route path='*' element={<NotFound />} />
        <Route path='' element={<Navigate to='/home' />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
