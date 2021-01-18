import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { Container, Title } from './styles'

function Header({ title }) {
  const [text, setText] = useState()

  useEffect(() => {
    switch (title) {
      case 'History':
        setText('História')
        break

      case 'Geography':
        setText('Geografia')
        break
      case 'Mythology':
        setText('Mitologia')
        break

      case 'Sports':
        setText('Esportes')
        break

      case 'Politics':
        setText('Política')
        break

      case 'General Knowledge':
        setText('Conhecimentos Gerais')
        break

      default:
        setText(title)
        break
    }
  }, [title])

  return (
    <Container>
      <Title>{text}</Title>
    </Container>
  )
}

Header.propTypes = {
  title: PropTypes.string,
}

export default Header
