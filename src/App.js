import { Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import Company from './containers/Company';
import About from './containers/About';
import NotFound from './containers/NotFound';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/companies/:company">
          <Company />
        </Route>
        <Route path="/not-found">
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
