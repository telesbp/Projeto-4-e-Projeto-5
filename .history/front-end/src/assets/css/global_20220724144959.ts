import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body{
       font-family: 'Roboto', sans-serif;
    }
    html, body, #root{
    height: 100%;
}
#root{
    display: flex;
    flex-direction: column;
}
#root > main {
    flex: 1;
    }
a{
    color: #344E41;
}
a:hover{
    color: #344E41;
}

`
