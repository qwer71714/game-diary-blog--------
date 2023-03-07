import '../App';

import styled from 'styled-components';
import LatestPostsComponent from '../Page/BullePage';

import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { TitleBox } from './Title-ps';
import { Announcement } from './NoticetexBox';

const Bigtitle = `
    font-weight: 900;
    font-size: 24px;
    padding-bottom: 1.5vh;
    text-align: left;
`

const Texturepowder =`
    margin-top: 15vh;
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
    border-radius: 15px;
    margin-top: 3vh;
    padding: 3vh;
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

const Notice = styled.section`
    ${Texturepowder}

    h1{
        ${Bigtitle}
    }    
`;

const NoticeBox = styled.div`
    display: flex;
`;

const AnnounBox = styled.div`
    border: 1px solid #000;
    border-radius: 15px;
    margin: 2vh 10vh 0 0;
    padding: 3vh;
`;

function Introduction () {
    return(
        <div className='App'>
            <Title>
                
            <TitleBox/>{/* 텍스터 자기소개서 글내용 TitleBox */}
                <Latest>
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
                    <ShorButton variant="dark" href="/gamebull-page">
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

            <Notice>
                <h1>공지사항</h1>
                <NoticeBox>
                    <AnnounBox>
                        <Announcement/>
                    </AnnounBox>
                </NoticeBox>
            </Notice>
        </div>
    )
};

export default Introduction