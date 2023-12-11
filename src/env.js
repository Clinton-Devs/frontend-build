const env = {
  clinton_homes_base_url: process.env.REACT_APP_BASE_URL,

  storeUser: (token, user) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
  },
  getUser: () => {
    return JSON.parse(localStorage.getItem("user"));
  },
  getToken: () => {
    let token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    return config;
  },
  logOut: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  },
};
export default env;
