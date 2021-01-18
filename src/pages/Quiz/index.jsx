import { useEffect, useState, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Flex } from 'reflexbox'

import { useQuiz } from '../../hooks/Quiz'
import api from '../../services/api'

import Header from '../../components/Header'
import Title from '../../components/Title'
import DifficultyChip from '../../components/DifficultyChip'
import PopButton from '../../components/PopButton'
import ClickableAnswer from '../../components/ClickableAnswer'
import { Container } from './styles'

function Quiz({ location }) {
  const { push } = useHistory()
  const { saveAnswer, savedAnswers } = useQuiz()
  const [question, setQuestion] = useState()
  const [answers, setAnswers] = useState()
  const [questionSelected, setQuestionSelected] = useState()
  const [selectedAnswer, setSelectedAnswer] = useState()
  const [categoryId, setCategoryId] = useState()
  const [penultimateAnswer, setPenultimateAnswer] = useState()
  const [antepenultimateAnswer, setAntepenultimateAnswer] = useState()
  const [difficulty, setDifficulty] = useState()

  useEffect(() => {
    if (!location.state.question || !location.state.category_id) push('/')

    const { question: questionData, category_id } = location.state
    setQuestion(questionData)
    setCategoryId(category_id)

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

  useEffect(() => {
    if (penultimateAnswer && antepenultimateAnswer && question) {
      switch (question.difficulty) {
        case 'easy':
          console.log(
            'easy => penultimateAnswer.hit_the_answer',
            penultimateAnswer.hit_the_answer,
          )
          console.log(
            'easy => antepenultimateAnswer.hit_the_answer',
            antepenultimateAnswer.hit_the_answer,
          )
          if (
            penultimateAnswer.hit_the_answer &&
            antepenultimateAnswer.hit_the_answer
          ) {
            setDifficulty('medium')
          }
          break

        case 'medium':
          console.log(
            'medium => penultimateAnswer.hit_the_answer',
            penultimateAnswer.hit_the_answer,
          )
          console.log(
            'medium => antepenultimateAnswer.hit_the_answer',
            antepenultimateAnswer.hit_the_answer,
          )
          if (
            penultimateAnswer.hit_the_answer &&
            antepenultimateAnswer.hit_the_answer
          ) {
            setDifficulty('hard')
          }
          if (
            !penultimateAnswer.hit_the_answer &&
            !antepenultimateAnswer.hit_the_answer
          ) {
            setDifficulty('easy')
          }
          break

        case 'hard':
          if (
            !penultimateAnswer.hit_the_answer &&
            !antepenultimateAnswer.hit_the_answer
          ) {
            setDifficulty('medium')
          }
          break

        default:
          setDifficulty('medium')
      }
    }
  }, [penultimateAnswer, antepenultimateAnswer, question])

  useEffect(() => {
    console.log('categoryId', categoryId)
  }, [categoryId])

  const sendSelectedAnswer = useCallback(
    async selectedAnswer => {
      const answerPayload = {
        difficulty: question.difficulty,
        correct_answer: question.correct_answer,
        selected_answer: selectedAnswer,
        answer_time: new Date(),
        hit_the_answer: question.correct_answer === selectedAnswer,
      }
      saveAnswer(answerPayload)

      const penultimate = savedAnswers[savedAnswers.length - 1]
      const antepenultimate = savedAnswers[savedAnswers.length - 2]

      setPenultimateAnswer(penultimate)
      setAntepenultimateAnswer(antepenultimate)

      const { data } = await api.get(null, {
        params: {
          category: categoryId,
          difficulty,
        },
      })

      console.log('=>>.', data)

      const questionData = data.results[0]

      const possibleAnswers = [
        ...questionData.incorrect_answers,
        questionData.correct_answer,
      ]

      const shuffledAnswers = possibleAnswers
        .map(answer => ({ sort: Math.random(), value: answer }))
        .sort((first, second) => first.sort - second.sort)
        .map(answer => answer.value)

      setQuestion(questionData)
      setAnswers(shuffledAnswers)
    },
    [categoryId, difficulty, question, saveAnswer, savedAnswers],
  )

  return (
    <>
      <Header title={question?.category} />
      <Container>
        <Flex marginBottom={4} width={1}>
          <Title text={`Questão ${savedAnswers.length + 1}`} />
          <DifficultyChip difficulty={question?.difficulty} />
        </Flex>

        <p>{question?.question}</p>

        <Flex marginTop={4} flexDirection="column">
          {answers?.map(answer => (
            <ClickableAnswer
              key={answer}
              text={answer}
              setQuestionSelected={setQuestionSelected}
              setSelectedAnswer={setSelectedAnswer}
            />
          ))}
        </Flex>

        <PopButton
          show={!!questionSelected}
          onClick={() => sendSelectedAnswer(selectedAnswer)}
          text="Responder"
        />
      </Container>
    </>
  )
}

Quiz.propTypes = {
  location: PropTypes.object,
}

export default Quiz
