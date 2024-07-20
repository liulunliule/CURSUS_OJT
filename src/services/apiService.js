import axios from "axios";

// const postLogin = (email, password) => {
//     if (!email || !password) {
//         console.error("Email and password are required");
//         return;
//     }
//     return axios.post("http://isolutions.top:8080/auth/login", {
//         email,
//         password,
//     });
// };

const postLogin = async (email, password) => {
    if (!email || !password) {
        console.error("Email and password are required");
        return;
    }
    try {
        const response = await axios.post(
            "http://isolutions.top:8080/auth/login",
            {
                email,
                password,
            }
        );
        return response;
    } catch (error) {
        if (error.response) {
            // Server responded with a status other than 2xx
            console.error("Error data:", error.response.data);
            // console.error("Error status:", error.response.status);
            // console.error("Error headers:", error.response.headers);
            throw error.response.data; // Throw error data to be caught in handleLogin
        }
    }
};

const postRegister = (name, email, password) => {
    return axios.post("http://isolutions.top:8080/auth/register", {
        name,
        email,
        password,
    });
};

const getCourse = () => {
    return axios.get("http://isolutions.top:8080/api/course/view-course");
};

// const getDataChart = () => {
//     return fetch("https://66952ff94bd61d8314ca672b.mockapi.io/year/1");
// };
// const getQuestion = () => {
//     return fetch(`https://66753c2ba8d2b4d072ef3683.mockapi.io/Test`);
// };

// const getOrder = () => {
//     return fetch(`https://669454774bd61d8314c73d55.mockapi.io/Order/1`);
// };

// const getGetAddr = () => {
//     return fetch(`https://669454774bd61d8314c73d55.mockapi.io/addr/1`);
// };

// const updateAddress = (addr) => {
//     return fetch("https://669454774bd61d8314c73d55.mockapi.io/addr/1", {
//         method: "PUT",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(addr),
//     });
// };

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
    getCourse,
    fetchOfficesData,
    fetchReleasesData,
    fetchPressData,
    fetchNextPayoutData,
    fetchTransactionsData,
    fetchCreditData,
    postLogin,
    postRegister,
    // getDataChart,
    // getQuestion,
    // getOrder,
    // getGetAddr,
    // updateAddress,
};
