import styled from 'styled-components';

import { shade, lighten } from 'polished';
import bkg from '../../assets/background.svg';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  place-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;

  width: 100%;
  max-width: 700px;

  img {
    width: 180px;
    height: 180px;
  }

  form {
    margin: 30px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 18px;
    }

    a {
      color: #457b9d;
      display: block;
      margin-top: 24px;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#457b9d')};
      }
    }
  }

  > a {
    color: #1d3557;
    display: block;
    margin-top: 24px;
    transition: color 0.2s;

    &:hover {
      color: ${lighten(0.2, '#1d3557')};
    }

    display: flex;
    align-items: center;

    svg {
      margin-right: 14px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${bkg}) no-repeat center;
  background-size: cover;
`;
