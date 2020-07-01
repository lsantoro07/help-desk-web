import styled from 'styled-components';
import { shade, lighten } from 'polished';

export const Container = styled.div``;

export const Header = styled.header`
  background: #457b9d;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 30px;

  button {
    background: transparent;
    border: 0;
    cursor: pointer;
    width: 25px;
    height: 25px;

    svg {
      width: 25px;
      height: 25px;
      color: #ffffff;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 48px;
    height: 48px;
    border-radius: 50px;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;
    font-size: 14px;

    span {
      color: #f1faee;
    }

    strong {
      color: #f1faee;
    }
  }
`;

export const Menu = styled.div`
  background: #457b9d;
  height: 25px;
  padding: 0 30px;

  ul {
    display: flex;
    list-style: none;
    font-size: 16px;

    li {
      margin-right: 15px;

      a {
        display: flex;
        align-items: center;
        justify-content: center;

        color: #f1faee;
        text-decoration: none;

        transition: color 0.2s;

        &:hover {
          color: ${shade(0.2, '#f1faee')};
        }

        svg {
          margin-right: 8px;
        }
      }
    }
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  section {
    margin: 20px;
  }
`;

export const Tickets = styled.ul`
  list-style: none;

  li {
    padding: 5px 5px;
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      color: #1d3557;
      text-decoration: none;

      transition: color 0.2s;

      &:hover {
        color: ${lighten(0.2, '#1D3557')};
      }
    }

    & + li {
      border-top: 1px solid #eee;
    }

    span + span {
      margin-left: 10px;
    }
  }
`;
