import React, { useEffect, useState, useMemo } from "react";
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

    const isPrivatresecret = (post) => post.isPrivatresecret === true;

    const isPlatformMatch = (post) => {
        if (selectedPlatform === 'Steam') {
            return post.Steam === true;
        } else if (selectedPlatform === 'Console') {
            return post.Console === true;
        }
        return true;
    };

    const filteredPosts = useMemo(() => (
        data.filter(post => !isPrivatresecret(post) && isPlatformMatch(post))
            .sort((a, b) => new Date(b.date) - new Date(a.date))
    ), [data, selectedPlatform]);

    const ImageComponent = useMemo(() => React.memo(({ titleImage }) => (
        <Image>
            {Parser(titleImage)}
        </Image>
    )), []);

    if (!data.length) {
        return <p>Loading...</p>;
    }

    return (
        <Container>
            <GameImgblock>
                {filteredPosts.map((post) => (
                    <Sio key={post.id}>
                        {!isPrivatresecret(post) && <ImageComponent titleImage={post.titleImage} />}
                    </Sio>
                ))}
            </GameImgblock>
        </Container>
    );
}

export default GameImg;