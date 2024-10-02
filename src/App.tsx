import AppRouter from './AppRouter';
import { LangProvider } from './context/langContext';

export default function App() {
  const bodyStyle = {
    WebkitTextSizeAdjust: '100%',
    textSizeAdjust: '100%',
  };

  return (
    <LangProvider>
      <div style={bodyStyle}>
        <AppRouter />
      </div>
    </LangProvider>
  )
}
