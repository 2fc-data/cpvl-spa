import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'normalize.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/Theme/theme';

import { GlobalStyles } from './styles/Global/globalStyles';
import { BaseLayout } from './components/Layout/';
import { DashboardScreen } from './screens/Dashboard';

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
