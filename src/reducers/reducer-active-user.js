export default function(state = null, action) {
  switch (action.type) {
    case "USER_SELECTED":
      return action.data;

    default: {
      break;
    }
  }
  return state;
}
