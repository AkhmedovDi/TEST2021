import Sidebar from './components/sidebar';
import Navbar from './components/navbar';
import Player from './components/player';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Player />
            </Route>
            <Route path="/:region/:id">
              <Player />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
