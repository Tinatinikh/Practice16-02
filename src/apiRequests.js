import axios from "axios";

export default function apiRequests(method,endpoint,data){ 
    return axios({

        url:"https://reqres.in/api/"+ endpoint,
        method,
        data
        
})
}