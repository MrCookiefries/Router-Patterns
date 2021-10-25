import { Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import DogList from './DogList';
import NavBar from './NavBar';

const App = () => (
  <main className="App">
    <NavBar />
    <Switch>
      <Route exact path="/dogs">
        <DogList />
      </Route>
      <Route exact path="/dogs/:name">
        <DogList />
      </Route>
      <Redirect to="/dogs" />
    </Switch>
  </main>
);

export default App;
