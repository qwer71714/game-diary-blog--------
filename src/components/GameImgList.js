import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import axios from 'axios';
import Parser from 'html-react-parser';


const GameImgblock = styled.section`
    margin: auto;
/*     justify-content: center; */
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`;

const Sio = styled.div`
    flex-basis: calc(33.3333% - 10px);
`;

const Image = styled.div`
    img{
        width: 90%;
        margin-top: 5vh;
    }
`;

function GameImg({ selectedPlatform }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/posts')
            .then(res => setData(res.data))
            .catch(err => console.error(err));
    }, []);

    const isPrivatresecret = (post) => {
        return post.isPrivatresecret === true;
    };

    const isPlatformMatch = (post) => {
        if (selectedPlatform === 'Steam') {
            return post.Steam === true;
        }
        if (selectedPlatform === 'Console') {
            return post.Console === true;
        }
        return true;
    };

    const filteredPosts = data
        .filter(post => !isPrivatresecret(post) && isPlatformMatch(post))
        .sort((a, b) => new Date(b.date) - new Date(a.date));

    return (
        <Container>
            <GameImgblock>
                {filteredPosts.map((post) => {
                    if (isPrivatresecret(post)) {
                        return null;
                    } else {
                        return (
                            <Sio key={post.id}>
                                <Image>
                                    {Parser(post.titleImage)}
                                </Image>
                            </Sio>
                        );
                    }
                })}
            </GameImgblock>
        </Container>
    );
}

export default GameImg;