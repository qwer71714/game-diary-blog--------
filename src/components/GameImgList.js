import { useEffect, useState, useMemo } from "react";
import { useHistory } from "react-router";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import axios from 'axios';
import Parser from 'html-react-parser';

const Gamewritingblock = styled.section`
    margin: auto;
    margin-top: 5vh;
    display: flex;
    flex-wrap: wrap;
    grid-gap: 11.54vh;
`;

const Sio = styled.div`
    margin-top: 3vh;
    padding: 4vh;
    box-shadow: 0 0 10px 0 rgba(0, 10, 0, 0.2);
    border-radius: 24px;
    cursor: pointer;
`;

const TitleImage = styled.div`
    img{
        width: 320px;
        height: 260px;
        object-fit: cover;
    }
`;

const PlatformTag = styled.div`
  display: flex;
  margin-top: 2vh;

  & > span {
    border-radius: 4px;
    font-weight: 600;
    font-size: 14px;
    padding: 3px 8px;
    margin-right: 4px;

    &:last-child {
      margin-right: 0;
    }
  }

  & > span.steam {
    background-color: #000;
    color: #ffffff;
  }

  & > span.console {
    background-color: #063fd5;
    color: #ffffff;
  }

  & > span.notice {
    background-color: #f50707;
    color: #ffffff;
  }
`;

const Title = styled.h3`
    margin-top: 2.5vh;
    font-size: 18px;
    font-weight: 800;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 3.6rem;
    line-height: 1.8rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
`;


const Timedate = styled.div`
    margin-top: 2.5vh;
    font-size: 14px;
    color: #999999;
`;

function isPlatformMatch(post, selectedPlatform) {
    if (selectedPlatform === 'Steam') {
        return post.Steam || post.isNotice;
    }
    if (selectedPlatform === 'Console') {
        return post.Console || post.isNotice;
    }
    return true;
}

function GameImg({ selectedPlatform }) {
    const [data, setData] = useState([]);
    const history = useHistory();

    useEffect(() => {
        axios.get('http://localhost:3001/posts')
            .then(res => setData(res.data))
            .catch(console.error);
    }, [selectedPlatform]);

    const filteredPosts = useMemo(() => {
        return data
            .filter(post => !post.isPrivatresecret && isPlatformMatch(post, selectedPlatform))
            .sort((a, b) => new Date(b.date) - new Date(a.date));
    }, [data, selectedPlatform]);

    const Detailedpage = ( post ) => {
        history.push(`/gamebull-page/${post.id}`);
    };

    return (
        <Container>
            <Gamewritingblock>
                {filteredPosts.map((post) => (
                    <Sio key={post.id}
                        onClick={() => Detailedpage(post)}>
                        <TitleImage>{Parser(post.titleImage)}</TitleImage>
                        <PlatformTag>
                            {post.Steam && <span className="steam">스팀</span>}
                            {post.Console && <span className="console">콘솔</span>}
                            {post.isNotice && <span className="notice">공지사항</span>}
                        </PlatformTag>
                        <Title>
                            {Parser(post.title.length >= 18
                                ? `${post.title.slice(0, 18)}...`
                                : post.title
                            )}
                        </Title>
                        <Timedate>{Parser(post.date)}</Timedate>
                    </Sio>
                ))}
            </Gamewritingblock>
        </Container>
    );
}

export default GameImg;
