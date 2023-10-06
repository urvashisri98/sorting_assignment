import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Page from './page';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
       <Route path="" element={<Page/>}/> 
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
