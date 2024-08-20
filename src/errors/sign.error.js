import { BaseError } from "./Base.error.js";

export class SignUserError extends BaseError{
    constructor(message){
        super()
        this.message = message
        this.name = "Sign error"
        this.status = 400
    }
}