import React, { useState } from 'react'
import SearchBar from './SearchBar';
import ProfileMenu from './ProfileMenu';
import { useNavigate } from 'react-router-dom';

function Nav() {
  
  const [menuShow, setMenuShow] = useState(false)
  
  const Navigate = useNavigate();
  


  const handleClick = () => {
   console.log("clll")
    Navigate('/politicsarticle');
  }
  return (
    <div style={{position:"relative"}}>
    <div id="nav">
    <div onClick={() => handleClick()}>politics</div>
    <div><SearchBar/></div>
    <div id='prfleIc' onClick={() => {setMenuShow(!menuShow)}}>Profile</div>
    
    {
      menuShow&&<div id='prfleMenu'><ProfileMenu/></div>
    }
    
    </div>
    </div>
  )
}

export default Nav
