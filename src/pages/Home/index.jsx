import { useEffect } from 'react'
import api from '../../services/api'
import { Container } from './styles'
import Header from '../../Components/Header'

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
        <h3>Categorias</h3>
      </Container>
    </>
  )
}

export default Home
