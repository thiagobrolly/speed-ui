import { SuperThemeProvider } from '@speed-ui/theme';
import { Home } from './pages/Home';

export function App() {
  return (
    <SuperThemeProvider>
      <Home />
    </SuperThemeProvider>
  );
}
