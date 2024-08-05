import React from 'react';
import { NavLink } from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import * as s from "../styles/Navigeter";

function Navigeter() {
  const links = ['MainPage','SeachTodo','SeachTodoList'];
  
  return (
    <div css={s.nav} >
      {
        links.map(link => (
          <NavLink
            key={link}
            to={link}
            id='navi'
            className={({ isActive }) => (isActive ? 'active': '')}
            >
              {link === '/' ? 'HOME' : link}
          </NavLink>
        ))
      }
    </div>
  );
}

export default Navigeter;