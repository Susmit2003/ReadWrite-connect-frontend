
import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import ProfileMenu from './ProfileMenu';
import { useNavigate } from 'react-router-dom';

function Nav() {
  const [menuShow, setMenuShow] = useState(false);
  const [loggedIn, setLoggedIn] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('id')) setLoggedIn(true);
    else setLoggedIn(false);
  }, []);

  const handleClickPol = () => {
    navigate('/politicsarticle');
  };

  const handleClickEdu = () => {
    navigate('/educational');
  };

  const handleClickSpo = () => {
    navigate('/sports');
  };

  return (
    <>
      <div className="relative">
        <div id="nav" className="flex justify-around items-center bg-white shadow-md py-4">
          <div className="navChild" onClick={handleClickPol}>Political</div>
          <div className="navChild" onClick={handleClickSpo}>Sports</div>
          <div className="navChild" onClick={handleClickEdu}>Educational</div>

          {loggedIn ? (
            <div
              onClick={() => navigate('/writearticle')}
              className="bg-white py-2 px-4 cursor-pointer"
            >
              Create Article
            </div>
          ) : (
            <span></span>
          )}

          {menuShow && (
            <div id="prfleMenu" className="absolute right-10 top-10">
              <ProfileMenu />
            </div>
          )}
        </div>
      </div>
      <div id="sBar" className="flex justify-between items-center p-4 bg-gray-200 h-24">
        <div id="logo" className="text-4xl font-serif">The Conversation</div>
        <div className="flex-grow mx-4">
          <SearchBar />
        </div>
        <div
          id="prfleIc"
          className="bg-gray-800 text-white w-20 h-20 flex items-center justify-center cursor-pointer rounded-full"
          onClick={() => setMenuShow(!menuShow)}
        >
          Profile
        </div>
      </div>
    </>
  );
}

export default Nav;




