const initialState = {
  userName: null,
  userEmail: null,
};

export const reducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case "sign_in":
      state.userName = payload.name;
      state.userEmail = payload.email;

    default:
      return state;
  }
};
