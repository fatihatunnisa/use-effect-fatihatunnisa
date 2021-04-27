import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
  } from "react-router-dom";

import Async from './pages/useEffect';

function App() {
  return(
  <Router> 
    <div className="App">
    <header>
      <nav>
        <ul>
          <li><Link to ="/">Async</Link></li>
        </ul>
      </nav>
    </header>
    <Switch>
      <Route exact path="/"><Async/></Route>
    </Switch>
    </div>
  </Router>
  );
}

export default App;
