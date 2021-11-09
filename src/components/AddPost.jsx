import React from "react";

const AddPost = () => {
  return (
    <div className="container">
      <h5 className="blue-text center-align">Zaidan Blog</h5>
      <form>
        <div className="input-field">
          <label htmlFor="post_title">Title</label>
          <input type="text" />
        </div>
        <div className="input-field">
          <label htmlFor="post_post">Content</label>
          <textarea name="text-area" className="materialize-textarea"></textarea>
        </div>
        <div className="input-field">
          <button className="btn blue">
            Submit
            <i className="material-icons right">send</i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPost;
