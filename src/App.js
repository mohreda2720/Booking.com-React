

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Hotel from "./pages/hotel/Hotel";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/hotels/:id" element={<Hotel/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
