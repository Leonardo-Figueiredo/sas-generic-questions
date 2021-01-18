import styled, { css } from 'styled-components'

export const Container = styled.div`
  align-items: center;
  align-self: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  background: #fff;

  display: flex;
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};

  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.35);
  height: 70px;
  width: 100%;

  ${({ show }) =>
    show &&
    css`
      animation: FadeIn 0.5s;
    `}

  @keyframes FadeIn {
    from {
      visibility: hidden;
      bottom: -50px;
      opacity: 0;
    }
    to {
      visibility: visible;
      bottom: 0;
      opacity: 1;
    }
  }
`

export const Button = styled.button`
  padding: 12px 60px;
  border: 0;
  border-radius: 12px;
  background: #4d8af0;
  color: #fff;
  font-weight: 700;
  font-size: 18px;
`
