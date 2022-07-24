import axios from 'axios';

// let API_URL="http://localhost:5000";
let API_URL="https://be-tramthuy-nodejs.herokuapp.com";

export default function callApi(endpoint, method='GET',body){
    return axios({
        method,
        url:`${API_URL}/${endpoint}`,
        headers:{
            "Authorization":"Bearer " + localStorage.getItem("accessToken")
        },
        data:body,
    })
    // .catch(e=>{
    //     console.log(e)
    // })
}