import 'normalize.css';

import { BaseLayout } from './components/Layout/';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DashboardScreen } from './screens/Dashboard';
import { GlobalStyles } from './styles/Global/globalStyles';
import { theme } from './styles/Theme/theme';
import { ThemeProvider } from 'styled-components';

import { About } from './pages/About/About.component';
import { Home } from './pages/Home/Home.component';

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <GlobalStyles />
          <Routes>
            <Route path='/*' element={<BaseLayout />}>
              <Route path="about" element={<About />} />
              <Route path="home" element={<Home />} />
              <Route path='/*' element={<DashboardScreen />} />
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App
