import axios from 'axios';

export const getVisitData = () => {
    return axios.get('https://cniitu.clevr-expo.com:18080/api/statistics/test')
};