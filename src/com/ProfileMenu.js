import React from 'react'
import { NavLink } from 'react-router-dom';

export default function ReaderProfile() {
  return (
    <div id="userprofile">
       <div id="MyProfile">
       <NavLink to="/profile">MyProfile</NavLink> 
       </div>

       <div id="Logout">
        LogOut
       </div>
    </div>
  )
}
