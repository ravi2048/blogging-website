import React from "react";
import ReactQuill from "react-quill";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setAlert } from "../redux/reducer";

export default function Home() {
  const posts = useSelector((state) => state.posts);
  const alert = useSelector((state) => state.alert.alert);
  const dispatch = useDispatch();

  return (
    <div className='home'>
      <div className='posts'>
        {posts.map((post, idx) => (
          <div className='post' key={post.id}>
            <div className='image'>
              <img src={post.img} alt='post' />
            </div>
            <div className='content'>
              <h1>{post.title}</h1>
              <ReactQuill
                value={post?.desc?.slice(0, 150) + "..."}
                readOnly={true}
                theme={"bubble"}
              />
              <Link className='link' to={`/post/${idx + 1}`}>
                <button>Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {alert && (
        <div className='alert'>
          <h2>Alert!</h2>
          <hr />
          <p>{alert}</p>
          <hr />
          <button onClick={() => dispatch(setAlert(""))}>Close</button>
        </div>
      )}
    </div>
  );
}
