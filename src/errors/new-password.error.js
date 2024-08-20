import { BaseError } from "./Base.error.js";

export class ChangePassError extends BaseError{
    constructor(message){
        super()
        this.message = message
        this.name = 'Error in change password'
        this.status  = 409
    }
}