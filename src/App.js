import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Hotel from "./pages/hotel/Hotel";
import Home from './pages/home/Home';
import List from "./pages/list/List";



function App() {
  return (
   
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path="/hotels" element={<List />}></Route>
        <Route path="/hotels/:id" element={<Hotel />} />
      </Routes>
    </BrowserRouter>
 

  );
}

export default App;
