import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import Skills from './pages/Skills';
import './app.scss';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={ Home } />
      <Route path="/about" component={ About } />
      <Route path="/projects" component={ Projects } />
      <Route path="/contacts" component={ Contacts }/>
      <Route path="/skills" component={ Skills } />
    </Switch>
  );
}

export default App;
