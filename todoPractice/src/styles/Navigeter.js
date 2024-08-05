import { css } from "@emotion/react";


export const nav = css`
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0px;
  padding: 0px;
  font-size: 20px;
  font-weight: 700;
  background-color: #dbdbdb;
  color: #dbdbdb;

  #navi{
    color: black;

    /* &.active {
    font-size: 24px;
    color: green;
  } */

  /* &:hover {
    color: green;
    font-size: 24px;
  } */
  }
`

export const navButtonActive = (flag) => css`
  color: ${flag ? "green" : "black"};
`;
//     color: black;

//     &:active{
//       color: green;
//     }
// `;
// export const greenColor = css`
//   color: green;
// `;
