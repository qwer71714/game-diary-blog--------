import '../App';
import styled from 'styled-components';
import LatestPostsComponent from '../Page/Bulle';

const Title = styled.div`
    margin-top: 10vh;
    text-align: left;
    font-weight: 400;
    line-height: 32px;
    display:flex;

     h1{
        font-weight: 900;
        font-size: 26px;
        padding-bottom: 15px;
        border-bottom: 1px solid #000;
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

function Introduction () {
    return(
        <div className='App'>
            <Title>
                <div className='Title'>
                    <h1>안녕하세요, 저는 게임을 좋아하는 청년입니다.</h1>
                    저는 스팀 게임을 좋아하며, 블로그에서 이를 공유하고 있습니다.
                    다양한 게임 플레이를 통해 나만의<br/>스토리를 만들고
                    재미와 감동을 담은 동영상 컨텐츠를 제공하며
                    게임 문제 해결 방법과 새로운 컨텐츠<br/>모드도 함께 소개합니다.
                    모든 분들이 즐거운 게임 라이프를 만끽할 수 있도록 블로그를 운영하고 있습니다.<br/>감사합니다.
                </div>
                
                <Latest>
                    <b>오늘의 블로그 소식</b>
                    <Bulletin>
                        <LatestPostsComponent/>
                    </Bulletin>
                </Latest>
            </Title>
        </div>
    )
};

export default Introduction