import axios from 'axios';

export const httpGet = (url, header = {}) => {
    return axios.get(url, header).then(response => {
        console.log('http get success, message => ', response);
        return response.data ? response.data : response;
    }, error => {
        console.log('http get error, message => ', error);
        return;
    });
};

export const httpPost = (url, body, header = {}) => {
    return axios.post(url, body, header).then(response => {
        console.log('http post success, message => ', response);
        return response.data ? response.data : response;
    }, error => {
        console.log('http post error, message => ', error);
        return;
    })
};

export const getHeader = () => {
    const accessToken = localStorage.getItem('accessToken');
    return { headers: { Authorization: ('Bearer ' + accessToken) } };
}