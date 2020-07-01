import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #457b9d;
  height: 40px;
  border-radius: 10px;
  border: 0;
  padding: 0 10px;
  color: #1d3557;
  width: 100%;
  font-weight: 500;
  margin-top: 14px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#457b9d')};
  }
`;
