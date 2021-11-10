import { useDispatch } from "react-redux";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { addPost } from "./../store/actions";

const AddPost = () => {
  const [post, setPost] = useState({
    id: "",
    title: "",
    content: ""
  });
  const dispatch = useDispatch();

  const handleChange = e => {
    setPost({
      ...post,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addPost(post));
    setPost({
      id: uuidv4(),
      title: "",
      content: ""
    });
  };

  return (
    <div className="container">
      <h5 className="blue-text center-align">Zaidan Blog</h5>
      <form>
        <div className="input-field">
          <label htmlFor="post_title">Title</label>
          <input onChange={handleChange} value={post.title} type="text" name="title" />
        </div>
        <div className="input-field">
          <label htmlFor="post_post">Content</label>
          <textarea onChange={handleChange} value={post.content} name="content" className="materialize-textarea"></textarea>
        </div>
        <div className="input-field">
          <button onClick={handleSubmit} className="btn blue">
            Submit
            <i className="material-icons right">send</i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPost;
