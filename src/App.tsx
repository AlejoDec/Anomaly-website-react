import AppRouter from './AppRouter';
import { LangProvider } from './context/langContext';

export default function App() {
  return (
    <LangProvider>
      <AppRouter />
    </LangProvider>
  )
}
