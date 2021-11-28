import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Detail from './routes/Detail';
import Home from './routes/Home';
function App() {
  //switch는 route를 찾아서 컴포넌트를 렌더링 .
  //한번에 하나의 route만 렌더링 하기 위해서 switch 씀.
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
