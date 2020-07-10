import styled from 'styled-components';

export const Container = styled.div`
  display: grid;

  grid-template-columns: 70px auto;
  grid-template-rows: 70px 35px auto;

  grid-template-areas:
    'header header'
    'menu menu'
    'detail detail';

  height: 100vh;
`;
