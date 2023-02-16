import './App.css';
import styled from 'styled-components';
import Introduction from './components/Main';
import Heathers from './components/Navbar';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className='App'>
      <Heathers/>
      <Container>
        <Introduction/>
      </Container>
    </div>
  );
}

export default App;
