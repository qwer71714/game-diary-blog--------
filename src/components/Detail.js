import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import axios from 'axios';
import styled from "styled-components";

const DetaildPage = styled.section`
    margin-top: 10vh;

    h3{
        font-size: 24px;
        font-weight: 900;
    }
`;

const Content = styled.div`
    margin-top: 10vh;
`;

function Detail() {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get(`http://localhost:3001/posts/${id}`);
            setPost(res.data);
        };
        getPost();
    }, [id]);

    return (
        <Container>
            <DetaildPage>
                <h3>{post?.title}</h3>
                <Content dangerouslySetInnerHTML={{ __html: post?.content }} />
            </DetaildPage>
        </Container>
    );
}

export default Detail;
