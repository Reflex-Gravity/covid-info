import axios from "axios"


export function getCasesByCountry(country, callback){
    try{
        const url = `https://corona.lmao.ninja/countries/${country}`;
    
        axios
            .get(url)
            .then( (response) => {
                console.log(response)
                callback(response)
            })
            .catch( err => {
    
            })
    } catch( err ){
        console.error("Error:: getCasesByCountry", err)
    }

}