import HomePage from './components/pages/HomePage';
import About from './components/pages/About';
import Contacto from './components/pages/Contacto';
import Services from './components/pages/Services';
import NotFound from './components/pages/404';
import Dashboard from './components/pages/Dashboard';

import { Router } from './main/Router';
// import { useEffect, useState } from 'react';

const rutas = [
  { path: '/', component: HomePage },
  { path: '/about', component: About },
  { path: '/contact', component: Contacto },
  { path: '/services', component: Services },
  { path: '/dashboard', component: Dashboard }
]

export default function App() {

  // const [backData, setBackData] = useState([{}]);

  // useEffect(() => {
  //   fetch('/api').then(res => res.json())
  //   .then(data => setBackData(data))
  // })

  return (
    <>
      <Router rutas={rutas} defaultComponent={NotFound} />
    </>
  )
}
