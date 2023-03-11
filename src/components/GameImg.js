import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from 'axios';
import Parser from 'html-react-parser';


const GameImgblock = styled.section`

`;

const Sio = styled.div`

`;

const Ti = styled.div`

`;

function GameImg() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/posts')
            .then(res => setData(res.data))
            .catch(err => console.error(err));
    }, []);

    const isPrivatresecret = (post) => {
        return post.isPrivatresecret === true;
    };

    return (
        <GameImgblock>
            {data.map((post) => {
                if (isPrivatresecret(post)) {
                    return null;
                } else {
                    return (
                        <Sio key={post.id}>
                            <Ti>
                                <h2>{Parser(post.title)}</h2>
                                {Parser(post.content)}
                            </Ti>
                        </Sio>
                    );
                }
            })}
        </GameImgblock>
    );
}

export default GameImg;