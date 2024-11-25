import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Weather from './components/Weather';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Weather/>} />
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
