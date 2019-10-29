/*Action Creator function*/
export const selectUser = user => {
  console.info("[action] selectUser", user);
  return {
    type: "USER_SELECTED",
    data: user
  };
};
