import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaPhone, FaUserShield } from 'react-icons/fa';

const Header = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Home', icon: <FaHome /> },
    { path: '/about', label: 'About', icon: <FaInfoCircle /> },
    { path: '/contact', label: 'Contact', icon: <FaPhone /> },
    { path: '/admin/groups', label: 'Admin', icon: <FaUserShield /> },
  ];

  return (
    <div className='flex container mx-auto h-20 items-center gap-8 bg-gray-900 text-white px-6  shadow-lg shadow-blue-500/50'>
      <Link to={'/'} className='text-2xl font-bold flex-1 text-blue-400 tracking-wide hover:text-blue-300 transition duration-300'>
        Logoo
      </Link>
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition duration-300 ${
            location.pathname === item.path 
              ? 'bg-blue-500 text-white shadow-md shadow-blue-500' 
              : 'hover:bg-gray-800 hover:text-blue-300'
          }`}
        >
          {item.icon} <span>{item.label}</span>
        </Link>
      ))}
    </div>
  );
};

export default Header;
