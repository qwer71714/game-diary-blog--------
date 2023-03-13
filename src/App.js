import "./App.css";
import Heathers from './components/Navbar';
import routes from './routes';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Heathers />
      <Switch>
        {routes.map((route) => {
          return <Route key={route.path} exact path={route.path} component={route.component} />;
        })}
      </Switch>
    </Router>
  );
}

export default App;
