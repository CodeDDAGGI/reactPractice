import { css } from "@emotion/react";

export const reset =css`
  html,body ,#root {
    margin : 0;
    padding: 0;
    height: 100%;
    width: 100%;
  }

  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  button {
    cursor: pointer;
  }
`