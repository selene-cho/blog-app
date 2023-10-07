import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { PostProps } from './PostList';
import { doc, getDoc } from 'firebase/firestore';
import { db } from 'firebaseApp';
import Loader from './Loader';

export default function PostDetail() {
  const params = useParams();
  const [post, setPost] = useState<PostProps | null>(null);

  const getPost = async (id: string) => {
    if (id) {
      const docRef = doc(db, 'posts', id);
      const docSnap = await getDoc(docRef);

      setPost({ id: docSnap.id, ...(docSnap.data() as PostProps) });
    }
  };

  const handleDelete = () => {
    console.log('delete');
  };

  useEffect(() => {
    if (params?.id) {
      getPost(params?.id);
    }
  }, [params?.id]);
  return (
    <>
      <div className="post__detail">
        {post ? (
          <div className="post__box">
            <div className="post__title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <div className="post__profile-box">
              <div className="post__profile" />
              <div className="post__author-name">{post?.email}</div>
              <div className="post__date">{post?.createdAt}</div>
            </div>
            <div className="post__utils-box">
              <Link to={`/posts/edit/${post?.id}`} className="post__edit">
                수정
              </Link>
              <div className="post__delete" role="presentation" onClick={handleDelete}>
                삭제
              </div>
            </div>
            <div className="post__text post__text--pre-wrap">{post?.content}</div>
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
}
