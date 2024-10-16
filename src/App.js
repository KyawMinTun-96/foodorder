import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer';
import { useState } from 'react';
import Login from './components/Login/Login';
import FoodDetail from './pages/FoodDetail/FoodDetail'

function App() {

  const [showLogin, setShowLogin] = useState(false);



  return (
    <>
    {showLogin? <Login setShowLogin={setShowLogin}/> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/food-detail/:foodID' element={<FoodDetail/>} />
        </Routes>
      </div>
      <Footer />
    </>

  );
}

export default App;
