export const addPost = post => {
  return { type: "ADD_POST", post };
};

export const deletePost = post => {
  return { type: "DELETE_POST", post };
};
