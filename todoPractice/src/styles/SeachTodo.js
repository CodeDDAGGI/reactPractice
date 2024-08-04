import { css } from "@emotion/react";

export const search = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  .search-maincon{
    width: 600px;
    height: 150px;
    border-radius: 10px;
    background-color:#dbdbdb;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .search-con {
    box-sizing: border-box;
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .search-icon {
    display: flex;
    margin-bottom: 50px;
    justify-content: flex-end;
  }

  .search-input {
    box-sizing: border-box;
    border-radius: 20px;
    height: 50px;
    width: 50px;

  }

  .search-label{
    box-sizing: border-box;
    display: flex;
    font-size: 50px;
  } 

  .search-add{
    width: 100px;
    height: 50px;
  }

  .search-btn{
    width: 100px;
    height: 50px;
  }
`