import styled from 'styled-components'

export const Container = styled.div`
  margin: 5px;
  padding: 20px;
  background: #ffffff;

  display: flex;
  flex-direction: column;
  flex: 1;
`
export const AnswerButton = styled.button`
  background: #fff;
  border: 0;
  border-radius: 6px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.35);
  padding: 20px;

  & + button {
    margin-top: 15px;
  }
`
