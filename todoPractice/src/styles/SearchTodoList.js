import { css } from "@emotion/react";


export const seachResult = css`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;

    `
export const todoList = css`
    width: 800px;
    height: 1000px;
    border: 1px solid #dbdbdb;
    `

export const todoListCon = css`
    box-sizing: border-box;
    margin: 10px;
    border: 1px solid #dbdbdb;
    height: 980px;
    background-color: #dbdbdba1;
`
export const todohigh = css`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    height: 100px;
    border-bottom: 1px solid #dbdbdb ;
    background-color : #cfccccff;
`

export const todoMenu = css`
    box-sizing : border-box ;
    height: 60px;
    border-bottom: 1px solid #d3d3d3;
    display: flex;
    align-items: center;
    justify-content: space-between;

    
`   

export const menubar = css`
    height: 60px;
    width: 200px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-weight: 700;
    font-size: 18px;
    &:hover {
        background-color: #9e9e9e;
        color: #d1cece;
    }

    &:active {
        background-color: #8a8989;
        color: #d1cece;
    }
`

export const todoListContent = css`
    height: 60px;
    padding: 0px 62px ;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 15px;
    cursor: pointer;
    font-weight: 700;
    font-size: 18px;
`

