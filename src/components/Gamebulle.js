import styled from "styled-components";
import myImage from '../img/imget-01.png';
import Steam from '../img/steam.png';
import Console from '../img/Console.png';
import { Container } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Separatorbar = styled.section`
    padding: 5vh;
    background-image: url(${myImage});
    background-size: cover;
    background-position: center center;
    background-color: rgba(0, 0, 0, 0.75);
    background-blend-mode: multiply;
`;

const FunctionButton = styled.div`
    display: flex;
    align-items: center;

    button{
        margin-right: 24px;
    }
`;

const OperationButton = styled.button`
    border: none;
    border-radius: 12px;
    padding: 8px 14px;
    background-color: #fff;
    color: #000;
    display: flex;
    align-items: center;

    .Steam{
        width: 32px;
        height: 32px;
        margin-right: 10px;
        background-image: url(${Steam});
        background-size: cover;
    }

    .Console{
        width: 32px;
        height: 32px;
        margin-right: 10px;
        background-image: url(${Console});
        background-size: cover;
    }

    &:hover{
        background-color: #EAEAEA;

        &:active{
            background-color: #DBDBDB;
        }
    }
`;

const Writing = styled.div`
    margin-left: auto;
`;

const Reactionbutton = styled(Link)`
    text-decoration: none;
    border: none;
    border-radius: 12px;
    padding: 8px 14px;
    background-color: #2A66F1;
    color: #fff;
    display: flex;
    align-items: center;

    &:hover{
        background-color: #EAEAEA;
        color: #000;

        &:active{
            background-color: #DBDBDB;
        }
    }
`;

function Gamebulle() {
    return (
        <Separatorbar>
            <Container>
                <FunctionButton>
                    <OperationButton><div className="Steam" />스팀</OperationButton>
                    <OperationButton><div className="Console" />콘솔</OperationButton>

                    <Writing>
                        <Reactionbutton to="/gamebull-page/create">글쓰기</Reactionbutton>
                    </Writing>
                </FunctionButton>
            </Container>
        </Separatorbar>
    );
}
export default Gamebulle;