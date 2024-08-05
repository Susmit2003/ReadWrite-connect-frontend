// import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';

export default function ReaderProfile() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('id')) setLoggedIn(true);
    else setLoggedIn(false);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('id');
    window.location.reload();
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-6 bg-gray-100 rounded-lg shadow-md w-full max-w-xs mx-auto">
      <div id="MyProfile" className="text-center">
        {loggedIn ? (
          <NavLink 
            to="/profile" 
            className="text-blue-600 hover:underline"
          >
            My Profile
          </NavLink>
        ) : (
          <NavLink 
            to="/signup" 
            className="text-blue-600 hover:underline"
          >
            Signup
          </NavLink>
        )}
      </div>

      {loggedIn ? (
        <div id="Logout">
          <button 
            onClick={handleLogout} 
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Log out
          </button>
        </div>
      ) : (
        <NavLink 
          to="/login" 
          className="text-blue-600 hover:underline"
        >
          Login
        </NavLink>
      )}
    </div>
  );
}
