import './App.css';
import Heathers from './components/Navbar';
import routes from './routes';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from "react-bootstrap";

function App() {
  return (
      <Router>
      <Heathers/>
      
      <Container>
        <Switch>
          {routes.map((route) => {
            return <Route key={route.path} exact path={route.path} component={route.component} />;
          })}
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
