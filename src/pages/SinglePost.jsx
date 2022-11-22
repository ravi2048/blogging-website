import React from "react";
import { Link, useLocation } from "react-router-dom";
import UserLogo from "../assets/man.png";
import ReactQuill from "react-quill";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, setAlert } from "../redux/reducer";

export default function SinglePost() {
  const posts = useSelector((state) => state.posts);
  const alert = useSelector((state) => state.alert.alert);
  const url = useLocation();
  const dispatch = useDispatch();
  
  const postId = url.pathname.split("/")[2];

  const deletePostFn = () => {
    dispatch(deletePost(postId));
    dispatch(setAlert("Blog Deleted Successfully"));
  };

  return (
    <div className='post'>
      <div className='container'>
        <div className='section-1'>
          <div className='image'>
            <img src={posts[postId - 1]?.img} alt='post' />
          </div>
          <div className='meta-data'>
            <div className='author-details'>
              <img src={UserLogo} alt='author' />
              <div className='name'>
                <span>Ravi Yadav</span>
                <span>Posted 2 days ago</span>
              </div>
            </div>
            <div className='post-actions'>
              <Link to={`/update-post/${postId}`} className="link">Edit</Link>
              <Link onClick={() => deletePostFn()} to='/' className="link">
                Delete
              </Link>
            </div>
          </div>

          <div className='content'>
            <h1>{posts[postId - 1].title}</h1>
            <ReactQuill
              value={posts[postId - 1].desc}
              readOnly={true}
              theme={"bubble"}
            />
          </div>
        </div>
        <div className='section-2'>
          <h1 className='title'>Other posts you may like</h1>
          {posts.map(
            (post, idx) =>
              idx !== postId - 1 && (
                <div className='post' key={post.id}>
                  <div className='image'>
                    <img src={post.img} alt='post' />
                  </div>
                  <div className='content'>
                    <h1>
                      {post.title}
                      <Link className='link' to={`/post/${post.id}`}>
                        <button>Read More</button>
                      </Link>
                    </h1>
                  </div>
                </div>
              )
          )}
        </div>
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
