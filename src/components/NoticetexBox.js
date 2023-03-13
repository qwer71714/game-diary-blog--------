import { useEffect, useState } from "react";
import axios from 'axios';
import styled from "styled-components";
import Parser from 'html-react-parser';

const Notice = styled.div`
    display: flex;
    margin-right: 2vh;
`;

const Contentbox = styled.div`
`;

const AnncTitle = styled.div`
    margin-right: 5vh;
    padding: 2vh;
    border: 1px solid #000;
    border-radius: 15px;

    h2{
        display: flex;
        align-items: center;
    }
`;

const NowBox = styled.div`
    background: linear-gradient(45deg, #F50707, #93291E);
    margin-left: 12px;
    padding: 6px 14px;
    border-radius: 15px;
    font-size: 2vh;
    text-align: center;
    color: #fff;
`;

export const Announcement = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/posts')
            .then(res => setData(res.data))
            .catch(err => console.error(err));
    }, []);

    const isNotice = (post) => {
        return post.isNotice === false;
    };

    const isPrivatresecret = (post) => {
        return post.isPrivatresecret === true;
    };

    const isNew = (post) => {
        const currentDate = new Date().toISOString().slice(0, 10);
        return post.date === currentDate;
    };

    return (
        <Notice>
            {data
                .filter(post => !isNotice(post) && !isPrivatresecret(post))
                .map((post) => (
                    <Contentbox key={post.id}>
                        <AnncTitle>
                            <h2>
                                {Parser(post.title)}
                                {isNew(post) && <NowBox>New</NowBox>}
                            </h2>
                            {Parser(post.content)}
                        </AnncTitle>
                    </Contentbox>
                ))}
        </Notice>
    );
};
