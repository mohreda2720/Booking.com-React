

import Hotel from "./pages/hotel/Hotel";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/hotels/:id" element={<Hotel/>}/>
    <Route path='/' element={<Home></Home>}></Route>
    </Routes>
 
    </BrowserRouter>
  );
}

export default App;
