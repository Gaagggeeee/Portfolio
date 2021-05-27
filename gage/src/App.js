import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// PAGES
import Header from './components/pages/header';
import Home from './components/pages/home';
import Work from './components/pages/work';
import Footer from './components/pages/footer';

function App() {
  return (
    <>
      <Router>
        <div className='app'>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/work' component={Work} />
        </Switch>
        <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
