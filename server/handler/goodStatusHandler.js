  
class ApiStatus extends Error{
    constructor(status, message) {
        super();
        this.status = status
        this.message = message
    }

    static Sucessfull (message){
        return new ApiStatus(200,message)
    }

}

module.exports = ApiStatus