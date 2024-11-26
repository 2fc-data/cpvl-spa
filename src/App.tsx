import 'normalize.css';
import { About } from './pages/About/';
import { Airspace } from './pages/AirSpace';
import { BaseLayout } from './components/Layout/';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from './styles/Global/default';
import { DashboardScreen } from './screens/Dashboard';
import { Direction } from './pages/Direction';
import { GlobalStyles } from './styles/Global/globalStyles';
import { Home } from './pages/Home/';
import { Login } from './pages/Login/';
import { PrivateRoutes } from './components/PrivateRoute';
import { Regiment } from './pages/Regiment';
import { Register } from './pages/Register';
import { theme } from './styles/Theme/theme';
import { ThemeProvider } from 'styled-components';
import { Statute } from './pages/Statute';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <GlobalStyles />
          <Container>
            <Routes>
              <Route path='/' element={<BaseLayout />}>
                <Route path="airspace" element={<Airspace />} />
                <Route path="about" element={<About />} />
                <Route path="direction" element={<Direction />} />
                <Route path="home" element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="*" element={<Home />} />
                <Route path="regiment" element={<Regiment />} />
                <Route path="register" element={<Register />} />
                <Route path="statute" element={<Statute />} />                
                <Route element={<PrivateRoutes />}>                  
                  <Route path='*' element={<DashboardScreen />} />
                  <Route path="logout" element={<Home />} />
                </Route>
              </Route>
            </Routes>
          </Container>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App
