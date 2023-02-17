import styled from "styled-components"

const Antox = styled.div`
    h1{
        font-size: 18px;
        padding-bottom: 0px;
    }
`;

export const Announcement = () => {
    return(
        <Antox>
            <h1>신규기능 업데이트</h1>
            <hr/>
        </Antox>
    )
}
