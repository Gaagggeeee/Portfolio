import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// PAGES
import Header from './components/pages/header';
import Home from './components/pages/home';
import Background from './components/pages/background';

function App() {
  return (
    <>
      <Router>
        <Background />
        <Header />
        <Switch>
          <Route to='/' exact component={Home}>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
