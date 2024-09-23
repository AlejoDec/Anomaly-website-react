import Navbar from './components/main/Navbar';
import Footer from './components/main/Footer';
import HomePage from './components/pages/HomePage';
import NotFound from './components/pages/404';
import About from './components/pages/About';
import Contacto from './components/pages/Contacto';
import Services from './components/pages/Services';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contacto />} />
        <Route path='/services' element={<Services />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  )
}
