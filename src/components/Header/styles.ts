import styled from 'styled-components';

export const Container = styled.div`
  grid-area: header;
  background: #457b9d;

  padding: 0 30px;

  display: flex;

  align-items: center;
  justify-content: space-between;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    width: 58px;
    height: 58px;
    border-radius: 50px;
  }

  span {
    font-size: 14px;
    padding-left: 10px;
  }
`;

export const Logo = styled.div`
  img {
    width: 120px;
    height: 48px;
  }
`;
