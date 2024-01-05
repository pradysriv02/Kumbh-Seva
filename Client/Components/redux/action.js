export function userLogIn(user) {
  return {
    type: "sign_in",
    payload: user,
  };
}
