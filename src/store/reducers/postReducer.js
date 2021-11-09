const initialState = {
  posts: [
    { id: 1, title: "post one", content: "this is post one" },
    { id: 2, title: "post two", content: "this is post two" }
  ]
};

const postReducer = (state = initialState, action) => {
  const { type, payLoad } = action;
  switch (type) {
    case "DELETE_POST":
      const newPost = state.posts.filter(post => post.id !== action.id);
      return {
        posts: newPost
      };
    default:
      return state;
  }
};

export default postReducer;
