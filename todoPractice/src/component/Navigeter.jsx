import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import * as s from "../styles/Navigeter";

function Navigeter() {
  const links = [ 'mainpage' , 'searchtodo' , 'searchtodolist' ];
  const location = useLocation();
  const pathname = location.pathname;
  
  return (
    <div css={s.nav} >
      {
        links.map(link => (
          <NavLink
            key={link}
            to={link}
            // id='navi'
            // className={({ isActive }) => (isActive ? 'active': '')}
            css={s.navButtonActive(link === pathname.slice(1))} 
            >
              {link}
          </NavLink>
        ))
      }
    </div>
  );
}

export default Navigeter;