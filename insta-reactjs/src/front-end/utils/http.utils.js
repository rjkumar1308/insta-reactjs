import axios from 'axios';

export const httpGet =  url => {
    return axios.get(url).then(response => {
        console.log('http get success, message => ', response);
        return response.data ? response.data : response;
    }, error => {
        console.log('http get error, message => ', error);
    });
}

export const httpPost = (url, body)  => {
    return axios.post(url, body).then(response => {
        console.log('http post success, message => ', response);
        return response.data ? response.data : response;
    }, error => {
        console.log('http post error, message => ', error);
    })
}