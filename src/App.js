import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Notes from './pages/Notes';
import Create from './pages/Create';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Notes />} />
        <Route exact path='/create' element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
