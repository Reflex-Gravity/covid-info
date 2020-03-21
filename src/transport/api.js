import axios from "axios"


export function getCasesByCountry(country, callback){
    try{
        const url = `https://corona.lmao.ninja/countries/${country}`;
    
        axios
            .get(url)
            .then( (response) => {
                if(response.status>=200 && response.status<=300)
                    callback(response.data)
            })
            .catch( err => {
                console.error("Api call error", err)
            })
    } catch( err ){
        console.error("Error:: getCasesByCountry", err)
    }

}