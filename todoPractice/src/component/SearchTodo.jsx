import React, { useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "../styles/SearchTodo";
import { FaSearch } from "react-icons/fa";
import api from '../api/axiosApi';

function SearchTodo({todoList, getTodoList}) {

  const [ isInputFocus, setInputFocus ] = useState(false);
  const [ todo , setTodo ] = useState({
    todoText: "",
    date:""
  })

  const inputRef = useRef(null);

  const handleIconClick = async () =>{
    setInputFocus(true);
    inputRef.current.focus();
  }

  // 추가
  const handleOnClick = () => {
    try {
      const response = api.post("todo");
      console.log(response.data);
    } catch (error) {
      console.error(error);  
    }
  }

  // 포커스 벗어날때
  const handleBlur = () => {
    setInputFocus(false);
  };

  const handleInputChange = (e) => {
    setTodo({
      ...todo,
      [ e.target.name ] : e.target.value
    })
  }

  const handleSearchClick = () => {

  }


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
              onChange={handleInputChange}
              name={todo.name}
            />
          </div>
          <div css={s.btnContainer}>
            <button css={s.botton} onChange={handleInputChange} onClick={handleOnClick}>추가</button>
            <button css={s.botton} onClick={handleSearchClick}>조회</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchTodo;
