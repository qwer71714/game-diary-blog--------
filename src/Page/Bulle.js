import styled from 'styled-components';

const LatestPosts = styled.div`
  margin-left: auto;
  font-size: 18px;
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
  const latestPosts = [
    {
      id: 1,
      title: '에이펙스 레전드플레이 해보았습니다!',
      date: '2023-02-10',
    },
    {
      id: 2,
      title: '핸들링? 이거뭐야? 완전대박~!',
      date: '2023-02-09',
    },
    {
      id: 3,
      title: '커리수마스의 대모험 이야기',
      date: '2023-02-08',
    },
    {
      id: 4,
      title: '오지마 오지마 물러나세요~!',
      date: '2023-02-16',
    },
    {
      id: 5,
      title: '오지마 오지마 물러나세요~!',
      date: '2023-02-08',
    },
    {
      id: 6,
      title: '오지마 오지마 물러나세요~!',
      date: '2023-02-08',
    },
    {
      id: 7,
      title: '오지마 오지마 물러나세요~!',
      date: '2023-02-08',
    },
    {
      id: 8,
      title: '오지마 오지마 물러나세요~!',
      date: '2023-02-11',
    },
  ];

  const slicedPosts = latestPosts.sort((a,b) => new Date(b.date) - new Date(a.date)).slice(0, 3);

  return (
    <LatestPosts>
      <b>최신글</b>
      <hr/>
      {slicedPosts.map((post) => (
        <Post key={post.id} onClick={() => {console.log("헤이빈")}}>
          <PostTitle>
                {post.title.length >= 4 
                ?`${post.title.slice(0, 9)}...` 
                : post.title}
          </PostTitle>
          <PostDate>{post.date}</PostDate>
        </Post>
      ))}
    </LatestPosts>
  );
}

export default LatestPostsComponent