import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/home';
import Cart from './pages/cart';


function App() {
  return (
    <div>
      <Router>
       
         <Routes>
         <Route path='/home' element={<Home/>} />
         <Route path='/cart' element={<Cart/>} />
         </Routes>
         
      </Router>
    </div>
     
  );
}

export default App;
