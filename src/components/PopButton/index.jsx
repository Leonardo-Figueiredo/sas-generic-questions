import PropTypes from 'prop-types'

import { Container, Button } from './styles'

function PopButton({ show, text }) {
  return (
    <Container show={show}>
      <Button>{text}</Button>
    </Container>
  )
}

PopButton.propTypes = {
  show: PropTypes.bool,
  text: PropTypes.string,
}

export default PopButton
