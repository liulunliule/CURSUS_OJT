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

const getDataChart = () => {
    return fetch("https://66952ff94bd61d8314ca672b.mockapi.io/year/1");
};

const getQuestion = () => {
    return fetch(`https://66753c2ba8d2b4d072ef3683.mockapi.io/Test`);
};

const getOrder = () => {
    return fetch(`https://669454774bd61d8314c73d55.mockapi.io/Order/1`);
};

const getGetAddr = () => {
    return fetch(`https://669454774bd61d8314c73d55.mockapi.io/addr/1`);
};

const updateAddress = (addr) => {
    return fetch("https://669454774bd61d8314c73d55.mockapi.io/addr/1", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(addr),
    });
};

const fetchCreditData = () => {
    return axios.get(
        "https://6691ca7d26c2a69f6e90b0fd.mockapi.io/api/added_credits"
    );
};

const fetchTransactionsData = () => {
    return axios.get(
        "https://6691ca7d26c2a69f6e90b0fd.mockapi.io/api/transactions"
    );
};

const fetchNextPayoutData = () => {
    return axios.get(
        "https://6691d15226c2a69f6e90c6fa.mockapi.io/api/next_payout"
    );
};

const fetchPressData = () => {
    return axios.get(
        "https://6690833cc0a7969efd9c4da4.mockapi.io/api/press_news"
    );
};

const fetchReleasesData = () => {
    return axios.get(
        "https://6690833cc0a7969efd9c4da4.mockapi.io/api/press_releases"
    );
};

const fetchOfficesData = () => {
    return axios.get("https://668f4a0880b313ba09178dee.mockapi.io/api/offices");
};

export {
    fetchOfficesData,
    fetchReleasesData,
    fetchPressData,
    fetchNextPayoutData,
    fetchTransactionsData,
    fetchCreditData,
    postLogin,
    logout,
    postRegister,
    getDataChart,
    getQuestion,
    getOrder,
    getGetAddr,
    updateAddress,
};
