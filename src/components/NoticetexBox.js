import styled from "styled-components"

const Antox = styled.div`

`;

const AntoxNewBox = styled.div`
    display: flex;
    align-items: center;
    
    h2{
        font-size: 18px;
        font-weight: 600;
        padding-bottom: 0;
        margin-bottom: 0;
        align-items: center;
    }

    span{
            background-color: #C70A0A;
            color: #fff;
            padding: 0px 18px;
            font-size: 12px;
            font-weight: 500;
            border-radius: 120px;
            margin: 0 3vh;
        }
`;

const AnnounDate = styled.span`
    font-size: 12px;
    font-weight: 400;
`;

export const Announcement = () => {
    return(
        <Antox>
           <AntoxNewBox><h2>신규기능 업데이트</h2><span>New</span></AntoxNewBox>
            <hr/>
            <AnnounDate>2023-02-17</AnnounDate>
        </Antox>
    )
}
