import React, { useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./../styles/SeachTodo";
import { FaSearch } from "react-icons/fa";

function SeachTodo() {

  const [isInput , setisInput] = useState(false);
  const inputRef = useRef(null);

  const handleIconClick = () =>{
    setisInput(!isInput);
    inputRef.current.focus();
  }

  const handleBlur = () => {
    setisInput(false);
  };

  const style = {
    width: isInput? '350px' : '50px',
    transition: 'ease-in-out 0.5s',
  }

  return (
    <div css={s.search}>
      <div className='search-maincon'>
        <div className='search-con'>
          <div className='search-icon'>
            <input type="text" 
            className='search-input' 
            style={style} 
            onBlur={handleBlur}
            ref={inputRef}
            />
            <label className='search-label' onClick={handleIconClick} ><FaSearch/></label>
          </div>
          <div>
            <button className='search-add'>추가</button>
            <button className='search-btn'>조회</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeachTodo;
