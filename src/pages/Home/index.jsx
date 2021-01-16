import { useEffect } from 'react'
import api from '../../services/api'
import { Container } from './styles'
import Header from '../../components/Header'
import Title from '../../components/Title'

function Home() {
  // const [category, setCategory] = useState()

  useEffect(() => {
    async function fetchQuestions() {
      const { response: questions } = await api.get()

      console.log(questions)
    }

    fetchQuestions()
  }, [])

  return (
    <>
      <Header title="Dev Mobile" />
      <Container>
        <Title text="Categorias" />
      </Container>
    </>
  )
}

export default Home
