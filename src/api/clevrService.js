import axios from 'axios';

export const getVisitData = (state) => {
    return axios.get(`https://cniitu.clevr-expo.com:18080/api/statistics/1/all?dateFrom=${state[0]}&dateTo=${state[1]}`);
};

export const getAllStands = () => {
    return axios.get('https://cniitu.clevr-expo.com:18080/api/stands/1');
};

export const downloadVisitorsData = (type, language, state) => {
    return axios.get(`https://cniitu.clevr-expo.com:18080/useraction/statistics/1/all?type=${type}&dateFrom=${state[0]}&dateTo=${state[1]}&language=${language}`)
};