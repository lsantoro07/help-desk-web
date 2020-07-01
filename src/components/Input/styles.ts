import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #a8dadc;
  border-radius: 10px;
  border: 2px solid #a8dadc;
  padding: 10px;
  width: 100%;

  color: #666360;
  display: flex;

  align-items: center;

  & + div {
    margin-top: 8px;
  }

  svg {
    margin-right: 16px;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #e63946;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border-color: #1d3557;
      color: #1d3557;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #1d3557;
    `}
  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #1d3557;

    &::placeholder {
      color: #666360;
    }
  }
`;

export const Error = styled(Tooltip)`
  height: 14px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #e63946;
    color: #fff;

    &::before {
      border-color: #e63946 transparent;
    }
  }
`;
