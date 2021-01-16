import { Container, Text } from './styles'
import PropTypes from 'prop-types'

function Title({ text }) {
  return (
    <Container>
      <Text>{text}</Text>
    </Container>
  )
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Title
