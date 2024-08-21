import { BaseError } from "./Base.error.js";

export class SendEmailError extends BaseError{
    constructor(message){
        this.message = message
        this.name = "Send email error"
        this.status = 409
    }
}