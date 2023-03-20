import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const LatestPosts = styled.div`
  margin-left: auto;
`;

const Post = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const PostTitle = styled.div`
  font-weight: 600;
  font-size: 16px;
  margin-right: 20vh;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 80%;
`;

const PostDate = styled.div`
  font-size: 12px;
`;


function LatestPostsComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/posts')
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, []);

  const isPrivatresecret = (post) => {
    return post.isPrivatresecret === true;
  };

  const filteredPosts = data
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .filter((post) => !isPrivatresecret(post))
    .slice(0, 3);

  function stripHtmlTags(html) {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  }



  return (
    <LatestPosts>
      <h1>오늘의 블로그 최신소식</h1>
      <hr />
      {filteredPosts
        .map((post) => (
          <Post key={post.id} onClick={() => {console.log("적상적으로 작동이 됩니다."); }}>
            <PostTitle>
              {post.title.length >= 3
                ? `${stripHtmlTags(post.title.slice(0, 12))}...`
                : stripHtmlTags(post.title)}
            </PostTitle>
            <PostDate>{post.date}</PostDate>
          </Post>
        ))}
    </LatestPosts>
  );
}

export default LatestPostsComponent;