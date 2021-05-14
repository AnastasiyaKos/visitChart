import axios from 'axios';

export const getVisitData = (state) => {
    return axios.get(`https://cniitu.clevr-expo.com:18080/api/statistics/1/all?dateFrom=${state[0]}&dateTo=${state[1]}`);
};

export const getAllStands = (userId) => {
    return axios.get(`https://cniitu.clevr-expo.com:18080/api/stands/${userId}`);
};

export const downloadVisitorsData = (userId, type, language, state) => {
    return axios.get(`https://cniitu.clevr-expo.com:18080/useraction/statistics/${userId}/all?type=${type}&dateFrom=${state[0]}&dateTo=${state[1]}&language=${language}`)
};