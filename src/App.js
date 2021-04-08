import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/home/home';

function App() {
  return (
    <Switch>
    <Route path="/" component={Home} exact />       
    </Switch>
  );
}

export default App;
