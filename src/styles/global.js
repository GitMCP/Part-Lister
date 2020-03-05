import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Orbitron:800&display=swap');


*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

html, border-style, #root {
    min-height: 100%;
}

body {
    background: #eff3f8;
    -webkit-font-smoothing: antialiased !important;
}

body, input, button {
    color: #222;
    font-size: 14px;
    font-family: sans-serif;
}

button {
    cursor: pointer;
}
`;
