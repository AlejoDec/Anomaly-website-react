import Navbar from './components/main/Navbar';
import Footer from './components/main/Footer';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import axios, { AxiosInstance } from 'axios';

const HomePage = lazy(() => import('./components/pages/HomePage'));
const About = lazy(() => import('./components/pages/About'));
const Contacto = lazy(() => import('./components/pages/Contacto'));
const Services = lazy(() => import('./components/pages/Services'));
const NotFound = lazy(() => import('./components/pages/404'));

export default function AppRouter() {
  const axiosInstance: AxiosInstance = axios.create();

  axiosInstance.interceptors.response.use(response => response, error => {
    if (error.response.status === 403 ){
       // redirect to 403 page
       window.location.href = '/'
    }
 });

  return (
      <Router>
        <Navbar />
        <Suspense fallback={<div className='w-screen h-screen flex items-center justify-center text-stone-300 text-2xl'>Loading...</div>}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/home/' element={<HomePage />} />
          <Route path='/about/' element={<About />} />
          <Route path='/contact/' element={<Contacto />} />
          <Route path='/services/' element={<Services />} />
          <Route path='/404/' element={<NotFound />} />
          <Route path='*' element={<Navigate to='/404/' />} />
        </Routes>
        <Footer />
        </Suspense>
      </Router>
  )
}