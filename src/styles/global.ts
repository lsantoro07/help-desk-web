import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}

body {
  background: #F1FAEE;
  color: #1D3557;
  -webkit-font-smoothing: antialiased;
}

body, input, button {
  font-family: 'Roboto', sans-serif;
  font-size: 13px;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 500;
}

button {
  cursor: pointer;
}

a {
  text-decoration: none;
}


`;

/**
 *
 * Paleta de cores:
 * #E63946
 * #F1FAEE
 * #A8DADC
 * #457B9D
 * #1D3557
 */
