import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import "./Sidenav.css";

export default function Sidenav() {
  const navigate = useNavigate();
  return (
    <div>
        <div className='sidenav-container'>
        <ul>
          <Link to="/"><li>Dashboard</li></Link>
          <Link to="/account"><li>Account</li></Link>
          <Link to="/products"><li>Productslist</li></Link>
          <Link to="/addproducts"><li>AddProducts</li></Link>
          <button onClick={() =>{
            localStorage.removeItem("token");
            navigate("/");
          }}>Sign Out</button>
        </ul>
        </div>
    </div>
  );
}
