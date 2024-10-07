import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import Navbar from './components/main/Navbar';
import Footer from './components/main/Footer';

const HomePage = lazy(() => import('./components/pages/HomePage'));
const About = lazy(() => import('./components/pages/About'));
const Contacto = lazy(() => import('./components/pages/Contacto'));
const Services = lazy(() => import('./components/pages/Services'));
const NotFound = lazy(() => import('./components/pages/404'));

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Current path:', location.pathname);
    if (location.pathname.endsWith('/') && location.pathname !== '/') {
      console.log('Redirecting to:', location.pathname.slice(0, -1));
      navigate(location.pathname.slice(0, -1), { replace: true });
    }
  }, [location, navigate]);

  return (
    <>
      <Navbar />
      <Suspense fallback={<div className='w-screen h-screen flex items-center justify-center text-stone-300 text-2xl'>Loading...</div>}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contacto />} />
          <Route path='/services' element={<Services />} />
          <Route path='/404' element={<NotFound />} />
          <Route path='*' element={<Navigate to='/404' />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default function AppRouter() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}