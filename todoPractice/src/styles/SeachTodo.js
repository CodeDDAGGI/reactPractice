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
    height: 150px;
    border-radius: 80px;
    background-color:#dbdbdb;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;

  .search-con {
    box-sizing: border-box;
    width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
   
  }

  .search-icon {
    display: flex;
    margin-bottom: 20px;
    justify-content: flex-end;
  }

  .search-input {
    box-sizing: border-box;
    border-radius: 40px;
    height: 50px;
    width: 50px;
    padding: 20px;
    font-size: 18px;
  }

  .search-label{
    box-sizing: border-box;
    display: flex;
    font-size: 50px;
    margin-left: 20px;
  } 

  .con-btn {
    display: flex;
    justify-content: flex-end;
  }

  .search-btn {
    width: 100px;
    height: 50px;
    border-radius: 20px;
    font-size: 16px;
    font-weight: 700;
    &:hover {
      background-color: #dbdbdb;
    }
  }

  .add-btn{
    margin-right: 20px;
    width: 100px;
    height: 50px;
  }

`