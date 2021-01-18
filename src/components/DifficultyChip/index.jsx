import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Flex } from 'reflexbox'
import PropTypes from 'prop-types'
import { FaStar } from 'react-icons/fa'
import { Container } from './styles'

function DifficultyChip({ difficulty }) {
  const [easyCollor, setEasyCollor] = useState('#aaa')
  const [mediumCollor, setMediumCollor] = useState('#aaa')
  const [hardCollor, setHardCollor] = useState('#aaa')
  const [translatedDifficulty, setTranslatedDifficulty] = useState()
  const { push } = useHistory()

  useEffect(() => {
    switch (difficulty) {
      case 'easy':
        setEasyCollor('#343b57')
        setTranslatedDifficulty('Fácil')
        break

      case 'medium':
        setEasyCollor('#343b57')
        setMediumCollor('#343b57')
        setTranslatedDifficulty('Médio')
        break

      case 'hard':
        setEasyCollor('#343b57')
        setMediumCollor('#343b57')
        setHardCollor('#343b57')
        setTranslatedDifficulty('Difícil')
        break

      default:
        setEasyCollor('#ccc')
        setMediumCollor('#ccc')
        setHardCollor('#ccc')
        setTranslatedDifficulty('')
        break
    }
  }, [difficulty, push])

  return (
    <Container>
      <Flex marginRight={3}>
        <FaStar size={9} color={easyCollor} />
        <FaStar size={9} color={mediumCollor} />
        <FaStar size={9} color={hardCollor} />
      </Flex>

      <p>{translatedDifficulty}</p>
    </Container>
  )
}

DifficultyChip.propTypes = {
  difficulty: PropTypes.string,
}

export default DifficultyChip
