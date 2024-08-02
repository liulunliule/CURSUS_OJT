import axios from "axios";

const getCourseDetail = (id) => {
    return axios.get(
        `https://6696231a0312447373c1386e.mockapi.io/course/${id}`
    );
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
    getCourseDetail,
    fetchOfficesData,
    fetchReleasesData,
    fetchPressData,
    fetchNextPayoutData,
    fetchTransactionsData,
    fetchCreditData,
};
