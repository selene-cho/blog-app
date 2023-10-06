import { Link } from 'react-router-dom';

export default function PostDetail() {
  return (
    <>
      <div className="post__detail">
        <div className="post__box">
          <div className="post__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
          <div className="post__profile-box">
            <div className="post__profile" />
            <div className="post__author-name">글쓴이</div>
            <div className="post__date">날짜</div>
          </div>
          <div className="post__utils-box">
            <div className="post__edit">
              <Link to={`/posts/edit/1`}>수정</Link>
            </div>
            <div className="post__delete">삭제</div>
          </div>
          <div className="post__text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, eveniet itaque earum reprehenderit,
            delectus provident aliquid porro inventore aut tempora corrupti nam praesentium harum eligendi! Nobis
            aliquid minima ducimus explicabo.
          </div>
        </div>
      </div>
    </>
  );
}
