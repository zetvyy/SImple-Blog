const initialState = {
  posts: []
};

const postReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case "DELETE_POST":
      const newPost = state.posts.filter(post => post.id !== action.id);
      return {
        posts: newPost
      };
    case "ADD_POST":
      return {
        posts: [...state.posts, action.post]
      };
    default:
      return state;
  }
};

export default postReducer;
