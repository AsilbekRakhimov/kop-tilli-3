import { BaseError } from "./Base.error.js";

export class CreateError extends BaseError{
    constructor(message){
        this.message = message
        this.name = 'Create data error'
        this.status = 409
    }
}