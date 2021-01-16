import PropTypes from 'prop-types'

import { Container, Title } from './styles'

function Header({ title }) {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
