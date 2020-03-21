import axios from "axios"

export function fetchApi(url, data, callback){
    axios
        .get(url)
        .then((response)=>{
            if(response.status >=200 && response.status<=300){
                callback(response.data)
            }
            callback({})
        })
        .catch((err)=>{
            console.error("Api call error", err)
        })
}