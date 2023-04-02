import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import styled from "styled-components";
import { Container } from "react-bootstrap";

const DetaildPage = styled.section`

`;

function DetailPage() {
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
                <h1 className="flex-grow-1">{post?.title}</h1>
            </DetaildPage>
        </Container>
    );
}

export default DetailPage;
