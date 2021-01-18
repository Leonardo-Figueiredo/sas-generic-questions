import { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import api from '../../services/api'
import Header from '../../components/Header'
import Title from '../../components/Title'
import CategoryButton from '../../components/CategoryButton'
import { Container, ButtonGroup } from './styles'

function Home() {
  const { push } = useHistory()

  const fetchQuestionByCategory = useCallback(
    async category_id => {
      const { data } = await api.get(null, {
        params: {
          category: category_id,
          difficulty: 'medium',
        },
      })

      const question = data.results[0]

      push('/quiz', {
        question,
        category_id,
      })
    },
    [push],
  )

  return (
    <>
      <Header title="Dev Mobile" />
      <Container>
        <Title text="Categorias" />

        <ButtonGroup>
          <CategoryButton
            text="História"
            onClick={() => fetchQuestionByCategory(23)}
          />
          <CategoryButton
            text="Geografia"
            onClick={() => fetchQuestionByCategory(22)}
          />
          <CategoryButton
            text="Mitologia"
            onClick={() => fetchQuestionByCategory(20)}
          />
          <CategoryButton
            text="Esportes"
            onClick={() => fetchQuestionByCategory(21)}
          />
          <CategoryButton
            text="Política"
            onClick={() => fetchQuestionByCategory(24)}
          />
          <CategoryButton
            text="Conhecimentos gerais"
            onClick={() => fetchQuestionByCategory(9)}
          />
        </ButtonGroup>
      </Container>
    </>
  )
}

export default Home
