import React, { useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./../styles/SeachTodo";
import { FaSearch } from "react-icons/fa";

function SeachTodo() {

  const [ isInputFocus, setInputFocus ] = useState(false);
  const inputRef = useRef(null);

  const handleIconClick = () =>{
    setInputFocus(true);
    inputRef.current.focus();
  }

  const handleBlur = () => {
    setInputFocus(false);
  };

  return (
    <div css={s.search}>
      <div css={s.searchCon} >
        <div css={s.searchItemBox}>
          <div css={s.searchIcon(isInputFocus)}>
            <button css={s.searchIconButton} onClick={handleIconClick}><FaSearch/></button>
            <input type="text" 
              css={s.searchInput}
              onBlur={handleBlur}
              ref={inputRef}
              onClick={handleIconClick}
            />
          </div>
          <div className='con-btn'>
            <button className='search-btn add-btn'>추가</button>
            <button className='search-btn search-btn'>조회</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeachTodo;
