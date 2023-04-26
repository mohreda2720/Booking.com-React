import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Hotel from "./pages/hotel/Hotel";
import Home from './pages/home/Home';
import List from "./pages/list/List";
import RegisterComponent from './pages/register/Register';
import LoginComponent from './pages/login/Login';




function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path="/hotels" element={<List />}></Route>
        <Route path="/register" element={<RegisterComponent />}></Route>
        <Route path="/login" element={<LoginComponent />}></Route>
        <Route path="/hotels/:id" element={<Hotel />} />
      </Routes>
    </BrowserRouter>



  );
}

export default App;
