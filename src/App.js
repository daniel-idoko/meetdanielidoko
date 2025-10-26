import { BrowserRouter } from 'react-router-dom'
import {createTheme, ThemeProvider } from "@mui/material"
import Layout from './components/Layout'

const theme = createTheme({
  palette: {
    primary:{
      main: '#ff5533',
    },
    secondary: {
      main: '#bac964',
    },
  },
  typography: {
    fontFamily: 'Questrial, sans-serif',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
  breakpoints: {
    values: {
      xs: 350,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          {/* <Routes>
              <Route path='/' element={<Notes />} />
              <Route path="/create" element={<Create />} />
          </Routes> */}
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
