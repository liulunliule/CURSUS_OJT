import axios from "axios";

const postLogin = (email, password) => {
    return axios.post("http://localhost:8081/api/v1/login", {
        email,
        password,
        delay: 3000,
    });
};

const logout = (email, refresh_token) => {
    return axios.post("http://localhost:8081/api/v1/logout", {
        email,
        refresh_token,
    });
};

const postRegister = (email, password, username) => {
    return axios.post("http://localhost:8081/api/v1/register", {
        email,
        password,
        username,
    });
};

export { postLogin, logout, postRegister };
