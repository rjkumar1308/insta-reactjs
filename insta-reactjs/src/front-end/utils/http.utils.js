import axios from 'axios';

export const httpGet =  url => {
    return axios.get(url).then(response => {
        console.log('http get success, message => ', response)
        return response.data ? response.data : response;
    }, error => {
        console.log("http get error, message => ", error);
    });
}