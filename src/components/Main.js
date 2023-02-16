import '../App';

import styled from 'styled-components';
import LatestPostsComponent from '../Page/Bulle';

import { TitleBox } from './Title-ps';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';

const Bigtitle = `
    font-weight: 900;
    font-size: 24px;
    padding-bottom: 1.5vh;
    text-align: left;
`

const Texturepowder =`
    margin-top: 10vh;
    text-align: left;
    font-weight: 400;
    line-height: 32px;
`

const Title = styled.section`
    ${Texturepowder}

    display:flex;

     h1{
        ${Bigtitle}
    }
`;

const Latest = styled.div`
    margin-left: auto;
    font-size: 18px;
`;

const Bulletin = styled.div`
    border: 1px solid #000;
    margin-top: 3vh;
    padding: 10px;
`;

const Shortcuts = styled.section`
    ${Texturepowder}
    margin-top: 4vh;

    h1{
        ${Bigtitle}
    }

`;
  

const ShorButton = styled(Button)`
    background-color: #000;
    border: 1px solid #000;
    margin: 1.5vh 5vh 0 0;

    &:hover{
        background-color: #fff;
        color: #000;
        border: 1px solid #000;
    }
`

const Top = styled(Tooltip)`
    margin-bottom: 3vh;
`;

function Introduction () {
    return(
        <div className='App'>
            <Title>
                
            <TitleBox/>{/* 텍스터 자기소개서 글내용 TitleBox */}
                <Latest>
                    <b>오늘의 블로그 소식</b>
                    <Bulletin>
                        <LatestPostsComponent/>
                    </Bulletin>
                </Latest>
            </Title>

            <Shortcuts>
                <h1>게임글 바로가기</h1>
                <OverlayTrigger
                    placement='top'
                    overlay={<Top>심심한 글내용들이 잔~뜩!!</Top>}
                >
                    <ShorButton variant="dark">
                        게임 블로그
                    </ShorButton>
                </OverlayTrigger>

                <OverlayTrigger
                    placement='top'
                    overlay={<Top>블로그 글형태에 편집된 동영상들이 잔~뜩!!</Top>}
                >
                <ShorButton variant="dark">
                    게임 동영상
                    </ShorButton>
                </OverlayTrigger>
            </Shortcuts>
        </div>
    )
};

export default Introduction