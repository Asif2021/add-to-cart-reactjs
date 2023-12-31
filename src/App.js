import React from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Cart from "./pages/CartPage/Cart";
import Navbar from "./components/Navbar/Navbar";
import Registration from "./pages/Registration/Registration";
import Login from "./pages/Login/Login";
import ProductPage from "./pages/Products/Products";
import Home from './pages/Home/Home'
import Contact from  './pages/Contact/Contact'
import ProtectedRoutes from "./pages/Services/ProtectedRoutes";
import PageNotFound from "./pages/404/404";


function App() {
  const location = useLocation();
  const shouldRenderNavbar = !["/register", "/login"].includes(location.pathname);

  return (
    <> 
      <div className="App">
          {shouldRenderNavbar && <Navbar/>}
            <Routes>  
            <Route path="/register" element={<Registration />} />
            <Route path="/login" element={<Login />} />
       
            {/* Protected Routes */}
            <Route path="/" element={<ProtectedRoutes/>}>
            <Route path="/" element={<Home/>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<ProductPage />}/>
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<PageNotFound/>}/>
            </Route>
          </Routes>
      </div>
    </>
  );
}

export default App;
