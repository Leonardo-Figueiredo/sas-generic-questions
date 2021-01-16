import PropTypes from 'prop-types'
import { Container, Text } from './styles'

function CategoryButton({ text, ...rest }) {
  return (
    <Container {...rest}>
      <Text>{text}</Text>
    </Container>
  )
}

CategoryButton.propTypes = {
  text: PropTypes.string,
}

export default CategoryButton
