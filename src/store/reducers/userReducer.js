const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "GETUSER":
      return { ...state, ...action.payLoad };

    default:
      return state;
  }
};

export { userReducer };
