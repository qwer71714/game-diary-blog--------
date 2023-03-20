import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import axios from 'axios';
import styled from "styled-components";
import Parser from 'html-react-parser';
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";

const MySwiperSlide = styled(SwiperSlide)`
    margin-right: auto;
    justify-content: left;
`;

const Notice = styled.div`
    margin-right: 2vh;
`;

const Contentbox = styled.div`
    padding: 2vh;
    border: 1px solid #000;
    border-radius: 15px;
    text-align: left;

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
        width: 100%;
        align-items: center;   
        margin-bottom: 0px;
    }
`;

const Creationdate = styled.div`
    font-size: 14px;
    margin-top: 1vh;

    span{
        font-weight: 500;
        margin-right: 5px;
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

    const filterPosts = (post) => {
        return post.isNotice && !post.isPrivatresecret;
    };

    const isNew = (post) => {
        const currentDate = new Date().toISOString().slice(0, 10);
        return post.date === currentDate;
    };

    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={1}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="mySwiper">
            <Notice>
                {data
                    .filter(filterPosts)
                    .map((post) => (
                        <MySwiperSlide key={post.id}>
                            <Contentbox>
                                <AnncTitle>
                                    {Parser(
                                        post.title.length >= 18
                                            ? `${post.title.slice(0, 18)}...`
                                            : post.title
                                    )}
                                    {isNew(post) && <NewBox>New</NewBox>}
                                </AnncTitle>
                                <Creationdate>
                                    <span>작성 날짜 :</span> {Parser(post.date)}
                                </Creationdate>
                                <hr />
                                {Parser(post.content)}
                            </Contentbox>
                        </MySwiperSlide>
                    ))}
            </Notice>
        </Swiper>
    );
};