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
          <div css={s.searchbtnContainer}>
            <button css={s.searchbtn}>추가</button>
            <button css={s.searchbtn}>조회</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeachTodo;
