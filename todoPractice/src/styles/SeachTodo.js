import { css } from "@emotion/react";

export const search = css`
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  
`

export const searchCon = css`
    width: 800px;
    height: 120px;
    background-color:#dbdbdb;
    display: flex;
    justify-content: center;
    align-items: center;

  .search-icon {
    
    /* justify-content: flex-end; */
  }

  .search-label{
    position: fixed;
    box-sizing: border-box;
    display: flex;
    font-size: 35px;
    margin-left: 0px;
    padding: 10px 0 10px 10px;
    cursor: pointer;

  } 

  .search-input {
    box-sizing: border-box;
    border-radius: 40px;
    height: 50px;
    width: 50px;
    padding: 20px;
    font-size: 18px;
    border: none;
  }

  


  .add-btn{
    margin-right: 20px;
    width: 100px;
  }

`

export const searchItemBox = css`
  box-sizing: border-box;
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const searchIcon = (isInputFocus) => css`
  position: relative;
  box-sizing: border-box;
  border: none;
  border-radius: 20px;
  width: ${isInputFocus ? 100 : 40}%;
  transition: all 0.5s ease-in-out;
  background-color: white;
  cursor: pointer;
  &:hover {
    width: ${isInputFocus ? 100 : 50}%;
  }
`

export const searchIconButton = css`
  display: flex;
  align-items: center;
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  right: 10px;
  border: none;
  background-color: transparent;
`;

export const searchInput = css`
  background-color: transparent;
  border: none;
  outline: none;
  padding: 10px 20px;
  width: 100%;
` 

export const iconCss = css`
  outline: none;
  border: none;
`

export const searchbtn = css`
  width: 100px;
  height: 40px;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  border: none;
  &:hover {
    background-color:#b3b0b0;
  }

  &:active {
    background-color: #ccb8b8;
  }
`

export const searchbtnContainer = css`
    display: flex;
    justify-content: flex-end;
`