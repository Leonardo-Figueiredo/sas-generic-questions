import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Flex } from 'reflexbox'

import { useQuiz } from '../../hooks/Quiz'

import Header from '../../components/Header'
import Title from '../../components/Title'
import DifficultyChip from '../../components/DifficultyChip'
import { Container, AnswerButton } from './styles'

function Quiz({ location }) {
  const { push } = useHistory()
  const { saveAnswer } = useQuiz()
  const [question, setQuestion] = useState()
  const [answers, setAnswers] = useState()

  useEffect(() => {
    if (!location.state) push('/')

    const { question: questionData } = location.state
    setQuestion(questionData)

    const possibleAnswers = [
      ...questionData.incorrect_answers,
      questionData.correct_answer,
    ]

    const shuffledAnswers = possibleAnswers
      .map(answer => ({ sort: Math.random(), value: answer }))
      .sort((first, second) => first.sort - second.sort)
      .map(answer => answer.value)

    setAnswers(shuffledAnswers)
  }, [location, push, saveAnswer])

  return (
    <>
      <Header title="História" />
      <Container>
        <Flex marginBottom={4} width={1}>
          <Title text="Questão 1" />
          <DifficultyChip difficulty={question?.difficulty} />
        </Flex>

        <p>{question?.question}</p>

        <Flex marginTop={4} flexDirection="column">
          {answers?.map(answer => (
            <AnswerButton key={answer}>{answer}</AnswerButton>
          ))}
        </Flex>
      </Container>
    </>
  )
}

Quiz.propTypes = {
  location: PropTypes.object,
}

export default Quiz
