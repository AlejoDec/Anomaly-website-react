import { useEffect, useState } from 'react'
import { EVENTS } from './consts'
import { match } from 'path-to-regexp';
import NotFound from '../components/pages/404'

interface Route {
  path: string;
  component: React.ComponentType;
}

interface RouterProps {
  rutas: Route[];
  defaultComponent?: React.ComponentType;
}

export function Router ({ rutas = [], defaultComponent: DefaultComponent = () => <NotFound /> }: RouterProps){
    const [ currentPath, setCurrentPath ] = useState(window.location.pathname)
  
    useEffect(() => {
      const onLocationChange = () => {
        setCurrentPath(window.location.pathname)
      }
  
      window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.addEventListener(EVENTS.POPSTATE, onLocationChange)
  
      return () => {
        window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
        window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
      }
    }, [])
  
    const Page = rutas.find(({ path }) => match(path)(currentPath))?.component
    

    return Page 
        ? <Page /> 
        : <DefaultComponent />
  }
