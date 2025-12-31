import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Men from "./pages/Men";

import Women from "./pages/Women";
import Kids from "./pages/Kids";
import Fashion from "./pages/Fashion";
import Jewelry from "./pages/Jewelry";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import SellerDashboard from "./pages/seller/SellerDashboard";
import SellerLogin from "./pages/seller/SellerLogin";
import SellerRegister from "./pages/seller/SellerRegister";

function App() {
  return (
    <>
      <Navbar cartCount={2} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/Men" element={<Men />}/>
         <Route path="/products/kids" element={<Kids />}/>
        <Route path="/products/women" element={<Women />}/>
        <Route path="/products/fashion" element={<Fashion />}/>
        <Route path="/products/jewelry" element={<Jewelry />}/>
 

        <Route path="/login" element={<Login />} />
         <Route path="/cart" element={<Cart />} />


          <Route path="/sellerDashboard" element={<SellerDashboard />} />
          <Route path="/seller/login" element={<SellerLogin />} />
          <Route path="/seller/register" element={<SellerRegister />} />   
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
