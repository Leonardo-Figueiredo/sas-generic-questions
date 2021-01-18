import { useCallback, useState } from 'react'

import PropTypes from 'prop-types'
import { Container } from './styles'

function ClickableAnswer({ text, setQuestionSelected, setSelectedAnswer }) {
  const [isSelected, setIsSelected] = useState(false)
  const [isBlur, setIsBlur] = useState(false)

  const handleButtonClick = useCallback(() => {
    setIsSelected(true)
    setIsBlur(false)
    setQuestionSelected(true)
    setSelectedAnswer(text)
  }, [setQuestionSelected, setSelectedAnswer, text])

  const handleButtonBlur = useCallback(() => {
    setIsBlur(true)
    setIsSelected(false)
  }, [])

  return (
    <Container
      isSelected={isSelected}
      onClick={handleButtonClick}
      onBlur={handleButtonBlur}
      isBlur={isBlur}
    >
      {text}
    </Container>
  )
}

ClickableAnswer.propTypes = {
  text: PropTypes.string,
  setQuestionSelected: PropTypes.func,
  setSelectedAnswer: PropTypes.func,
}

export default ClickableAnswer
