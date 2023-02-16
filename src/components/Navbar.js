import '../App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';

const Heather = styled(Navbar)`
    align-items: center;
`

const Brand = styled(Navbar.Brand)`
    font-weight: 700;
    font-size: 36px;
`;

const Navdiv = styled(Nav)`
    margin-left: auto;
    
    a{
        font-size: 14px;
        font-weight: 300;
        margin: 0px 10px;
        
        &:hover{
            color: #fff;
        }
    }
`;

const Heathers = () => {
    return(
        <Heather bg="dark" variant="dark">
        <Container>
          <Brand href="#home">Steam-Qr</Brand>
          <Navdiv>
            <Nav.Link href="#game-block">내가 하고있는 게임</Nav.Link>
            <Nav.Link href="#gaming-blogs">게임 블로그</Nav.Link>
            <Nav.Link href="#game-video">게임 동영상</Nav.Link>
            <Nav.Link href="#menu">전체 메뉴</Nav.Link>
          </Navdiv>
        </Container>
      </Heather>
    );
}

export default Heathers

