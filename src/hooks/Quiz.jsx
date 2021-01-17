import { createContext, useContext, useCallback, useState } from 'react'

const QuizContext = createContext({})

export const QuizProvider = ({ children }) => {
  const [savedAnswers, setSavedAnswers] = useState()

  const saveAnswer = useCallback(
    ({ questionPayload }) => {
      setSavedAnswers([...savedAnswers, ...questionPayload])
    },

    [savedAnswers],
  )

  return (
    <QuizContext.Provider value={{ saveAnswer, savedAnswers }}>
      {children}
    </QuizContext.Provider>
  )
}

export function useQuiz() {
  const context = useContext(QuizContext)

  if (!context) throw new Error('useQuiz must be used within an QuizProvider')

  return context
}
