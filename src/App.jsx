import { BrowserRouter } from 'react-router-dom'

import { QuizProvider } from './hooks/Quiz'
import GlobalStyle from './styles/global'
import Routes from './routes'

function App() {
  return (
    <BrowserRouter>
      <QuizProvider>
        <Routes />
      </QuizProvider>

      <GlobalStyle />
    </BrowserRouter>
  )
}

export default App
