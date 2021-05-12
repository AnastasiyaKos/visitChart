import axios from 'axios';

export const getVisitData = () => {
    return axios.get('https://cniitu.clevr-expo.com:18080/api/statistics/1/all?dateFrom=0&dateTo=1101010101010101010')
};

export const getAllStands = () => {
    return axios.get('https://cniitu.clevr-expo.com:18080/api/stands/1')
}