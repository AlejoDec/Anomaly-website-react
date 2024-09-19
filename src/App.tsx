import HomePage from './components/pages/HomePage';
import About from './components/pages/About';
import Contacto from './components/pages/Contacto';
import Services from './components/pages/Services';
import NotFound from './components/pages/404';

import { Router } from './Router';

import './styles/App.css'

const rutas = [
  { path: '/', component: HomePage },
  { path: '/about', component: About },
  { path: '/contact', component: Contacto },
  { path: '/services', component: Services },
]

export default function App() {
  return (
    <>
      <Router rutas={rutas} defaultComponent={NotFound} />
    </>
  )
}
