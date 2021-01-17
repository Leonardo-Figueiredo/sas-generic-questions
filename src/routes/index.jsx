import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Quiz from '../pages/Quiz'

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/quiz" component={Quiz} />
  </Switch>
)

export default Routes
