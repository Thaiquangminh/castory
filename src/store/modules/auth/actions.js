import axios from "axios";

export default {
  async handleLogin(context, payload) {
    let mainURI = "http://103.107.183.127:81/api/login";
    await axios
      .post(mainURI, {
        user_name: payload.username,
        password: payload.password,
      })
      .then((res) => {
        console.log(res);
        if (res.data.status_code === 200) {
          localStorage.setItem("token_type", res.data.token_type);
          localStorage.setItem("access_token", res.data.access_token);
          context.commit("handleLogin", {
            access_token: res.data.access_token,
            token_type: res.data.token_type,
          });
        } else {
          const error = res.data.message || "Something is wrong!";
          throw error;
        }
      });
    //
    // const data = await response.json();
    // if (response.status === 200) {
    //   if (data.status_code === 200) {
    // localStorage.setItem("token_type", data.token_type);
    // localStorage.setItem("access_token", data.access_token);
    // context.commit("handleLogin", {
    //   access_token: data.access_token,
    //   token_type: data.token_type,
    // });
    //   } else {
    //     // const error = new Error(data.message || "Something is wrong!");
    //     // throw error;
    //   }
    // } else {
    //   const error = new Error(data.message || "Something is wrong!");
    //   throw error;
    // }
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
