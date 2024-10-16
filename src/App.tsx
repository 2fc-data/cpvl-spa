import { BaseLayout } from './components/Layout/';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DashboardScreen } from './screens/Dashboard';
import { GlobalStyles } from './styles/Global/globalStyles';
import 'normalize.css';
import { theme } from './styles/Theme/theme';
import { ThemeProvider } from 'styled-components';

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <GlobalStyles />
          <Routes>
            <Route path='/*' element={<BaseLayout />}>
              <Route path='/*' element={<DashboardScreen />} />
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App
