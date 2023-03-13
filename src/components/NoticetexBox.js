import { useEffect, useState } from "react";
import axios from 'axios';
import styled from "styled-components";
import Parser from 'html-react-parser';

const Notice = styled.div`
    display: flex;
    margin-right: 2vh;
`;

const Contentbox = styled.div`
    margin-right: 5vh;
    padding: 2vh;
    border: 1px solid #000;
    border-radius: 15px;

    p{
        margin-top: 1.2vh;
        margin-bottom: 0;
    }
`;

const AnncTitle = styled.div`
    display: flex;
    align-items: center;

    h2{
        font-weight: 500;
        font-size: 20px;
        font-weight: 600;
        align-items: center;   
        margin-bottom: 0px;
    }
`;


const NewBox = styled.div`
    background: linear-gradient(45deg, #F50707, #93291E);
    margin-left: 12px;
    padding: 0.1px 16px;
    border-radius: 120px;
    font-size: 14px;
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
                            {Parser(
                                post.title.length >= 9
                                    ? `${post.title.slice(0, 18)}...`
                                    : post.title
                            )}
                            {isNew(post) && <NewBox>New</NewBox>}
                        </AnncTitle>
                        {Parser(post.content)}
                    </Contentbox>
                ))}
        </Notice>
    );
};
