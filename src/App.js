import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Notes from './pages/Notes';
import Create from './pages/Create';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Layout from './components/Layout';

const theme = createTheme({
  palette: {
    marginBottom: 20,
    marginTop: 20,
  },
  typography: {
    fontFamily: 'League Spartan',
    fontWeight: '',
  },
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Layout>
          <Routes>
            <Route exact path='/' element={<Notes />} />
            <Route exact path='/create' element={<Create />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
