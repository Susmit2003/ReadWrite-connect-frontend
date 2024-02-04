import React, { useState } from 'react'
import SearchBar from './SearchBar';
import ProfileMenu from './ProfileMenu';
import { useNavigate } from 'react-router-dom';

function Nav() {
  
  const [menuShow, setMenuShow] = useState(false)
  
  const Navigate = useNavigate();
  


  const handleClickPol = () => {
   console.log("clll")
    Navigate('/politicsarticle');
  }

  const handleClickEdu = () => {
    console.log("clll")
     Navigate('/educational');
   }
   const handleClickSpo = () => {
    console.log("clll")
     Navigate('/sports');
   }
   
  return (
    <div style={{position:"relative"}}>
    <div id="nav">
    <div className='navChild' onClick={() => handleClickPol()}>political</div>
    <div className='navChild' onClick={() => handleClickSpo()}>Sports</div>
    <div className='navChild' onClick={() => handleClickEdu()}>Educational</div>
    
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
