import axios from 'axios';

const basicUrl = `https://cniitu.clevr-expo.com:18080/`;

export const getVisitData = (state) => {
    return axios.get(basicUrl + `api/statistics/1/all?dateFrom=${state[0]}&dateTo=${state[1]}`);
};

export const getAllStands = (userId) => {
    return axios.get(basicUrl + `api/stands/${userId}`);
};
