import { useCallback } from 'react'
import api from '../../services/api'
import { Container, ButtonGroup } from './styles'
import Header from '../../components/Header'
import Title from '../../components/Title'
import CategoryButton from '../../components/CategoryButton'

function Home() {
  const fetchQuestionByCategory = useCallback(async category_id => {
    const { data: question } = await api.get(null, {
      params: {
        category: category_id,
      },
    })

    console.log(question)
  }, [])

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
