import React, { useContext, useEffect, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';
import ToggleThemeButton from '../ToggleThemeButton/ToggleThemeButton';
import { toast } from 'react-toastify';
import logoImage from '../../assets/pixelcut-export-removebg-preview.png'; // Adjust the path if necessary


const Navbar = ({ setShowLogin, showLogin, isLoggedIn, setIsLoggedIn }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, cartItems, setValue, value } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    toast.success("User Logged Out Successfully!!", {
      position: "top-center",
    });
  };

  const handleNavigateAndScroll = (sectionId) => {
    navigate('/');
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }, 0);
  };

  return (
    <div className='navbar'>
      <Link to='/'>
        <img className='logo' src={logoImage} alt="logo" onClick={() => setMenu("home")} />
      </Link>
      <ul className="navbar-menu">
        <Link to="/" onClick={() => setMenu("home")} className={`${menu === "home" ? "active" : ""}`}>Home</Link>
        <li onClick={() => {
          setMenu("menu");
          handleNavigateAndScroll('explore-menu');
        }} className={`${menu === "menu" ? "active" : ""}`}>Menu</li>
      </ul>
      <div className="navbar-right">
        <ToggleThemeButton />
        <Link to='/cart' className={`${menu === "basket" ? "active" : ""}`} onClick={() => setMenu("basket")}>
          <img src={assets.basket_icon} alt="basket" className='basket' />
          <div className='cart1'>
            {value}
          </div>
        </Link>
        <button onClick={() => {
          if (isLoggedIn) {
            handleLogout();
          } else {
            setShowLogin(prev => !prev);
          }
        }}>
          {isLoggedIn ? "Log out" : "Sign in"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
