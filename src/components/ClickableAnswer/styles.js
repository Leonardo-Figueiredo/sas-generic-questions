import styled, { css } from 'styled-components'

export const Container = styled.button`
  background: #fff;
  border: 0;
  border-radius: 6px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.35);
  padding: 20px;

  ${props =>
    props.isSelected &&
    css`
      border: 2px solid #4d8af0;
    `}

  ${props =>
    props.isBlur &&
    css`
      border: 0;
    `}

  & + button {
    margin-top: 15px;
  }
`
