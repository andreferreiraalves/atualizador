import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
        background-color: #F4F4F4;
    }

    *, button, input {
        border: 0;
        outline: 0;
        font-family: 'Robot', sans-serif;
    }

    :root {
        --primary: #FF7600;
        --secundary: #015D62;
        --disabled: rgba(196, 196, 196, 0.5);
    }
`;