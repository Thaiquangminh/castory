export default {
  async handleLogin(context, payload) {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBZkE7trQ2727WfSMSacjY4bRlXilz95jM",
      {
        method: "POST",
        body: JSON.stringify({
          email: payload.username,
          password: payload.password,
          returnSecureToken: true,
        }),
      }
    );

    const data = await response.json();
    if (response.status !== 200) {
      const error = new Error(
        data.message || "Your user name or password is wrong!"
      );
      throw error;
    }
    localStorage.setItem("userId", data.localId);
    localStorage.setItem("token", data.idToken);
    context.commit("handleLogin", {
      token: data.idToken,
      userId: data.localId,
    });
  },

  handleSetToken(context, payload) {
    context.commit("handleSetToken", payload);
  },
  handleClearLocalStorage(context) {
    context.commit("handleClearLocalStorage");
  },
  handleKeepLogin(context) {
    const token = localStorage.getItem("token");
    context.commit("handleKeepLogin", token);
  },
};
