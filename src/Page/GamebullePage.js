import styled from "styled-components"
import { Container } from "react-bootstrap";

const Separatorbar = styled.section`
    padding: 3vh;
    background-color: #6F42F3;
`
const FunctionButton = styled.div`
    display: flex;
    align-items: center;

    button{
        margin-right: 24px;
    }
`
const OperationButton = styled.button`
    border: none;
    border-radius: 12px;
    padding: 8px 18px;
    color: #000;

    &:hover{
        background-color: #EAEAEA;

        &:active{
            background-color: #DBDBDB;
        }
    }
`

const Explanation = styled.div`
   margin-left: auto;

   h2{
    color: #fff;
   }
`

function Gamebulle(){
    return(
        <Separatorbar>
            <Container>
                <FunctionButton>
                    <OperationButton>로그인</OperationButton>
                    <OperationButton>회원가입</OperationButton>
                
                    <Explanation>
                        <h3>게임 블로그에 오신걸 환영합니다</h3>
                    </Explanation>
                </FunctionButton>
            </Container>
        </Separatorbar>
    )
}
export default Gamebulle