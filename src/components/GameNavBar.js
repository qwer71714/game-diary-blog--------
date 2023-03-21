import styled from "styled-components";
import myImage from '../img/imget-01.png';
import Steam from '../img/steam.png';
import Console from '../img/Console.png';
import { Container } from "react-bootstrap";

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

function Gamebulle({ isAdmin, setSelectedPlatform }) {
    const handlePlatformSelect = (platform) => {
        setSelectedPlatform(platform);
    };
    return (
        <Separatorbar>
            <Container>
                <FunctionButton>
                    <OperationButton onClick={() => handlePlatformSelect('Steam')}><div className="Steam" />스팀</OperationButton>
                    <OperationButton onClick={() => handlePlatformSelect('Console')}><div className="Console" />콘솔</OperationButton>
                    <OperationButton onClick={() => handlePlatformSelect('all')}><div className="all" />전체</OperationButton>
                </FunctionButton>
            </Container>
        </Separatorbar>
    );
}
export default Gamebulle;