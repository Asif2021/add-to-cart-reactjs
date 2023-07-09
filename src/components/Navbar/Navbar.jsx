import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [isOnProductPage, setisOnProductPage] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(()=>{
    setisOnProductPage(location.pathname === "/products");
  }, [location.pathname]);

  const handleClickProducts = () => {
    setisOnProductPage(true);
  }

  const handleLogout = () => {
    localStorage.removeItem("loggedin");
    navigate("/login");
  }

  return (
    <>
      <div className='container-fluid'>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" href="#">Navbar</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to={"/"} className="nav-link active" aria-current="page" href="#">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={"/products"} onClick={handleClickProducts} className="nav-link active" aria-current="page" href="#">Products</Link>
                </li>
                <li className="nav-item">
                  <Link to={"/contact"} className="nav-link active" aria-current="page" href="#">Contact</Link>
                </li>
              </ul>
              {isOnProductPage ? <button onClick={ () => navigate('/cart') } className="btn btn-outline-light"> <i class="fa fa-shopping-cart" aria-hidden="true"></i> </button> : <button onClick={handleLogout} className="btn btn-outline-success">Logout</button>}



            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar