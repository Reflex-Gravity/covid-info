
class LocalStorage {

    validator(){
        if(window.localStorage){
            return true
        } 
        
        return false
    }

    generateExpiry(){
        // set expiry to 1 day.
        return new Date().getTime() + 86400000
    }

    setItem(key, data){
        if(this.validator()){
            try{
                const expiry = this.generateExpiry()
                const dataWithExpiry = {
                    expiry,
                    data
                }
                window.localStorage.setItem(key, JSON.stringify(dataWithExpiry))
            } catch(err){
                console.error("Error while setting data to storage", err)
            }
        }
    }

    getItem(key){
        if(this.validator()){
            const stringifiedData = window.localStorage.getItem(key)
            const dataWithExpiry = JSON.parse(stringifiedData)
            const {expiry, data} = dataWithExpiry

            if(expiry > new Date().getTime()){
                return data
            } else {
                return {}
            }
        }
    }
}

export default LocalStorage
