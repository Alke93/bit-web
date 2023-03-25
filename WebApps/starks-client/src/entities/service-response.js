export class ServiceResponse {
    status;
    description;
    body;

    constructor(status, description, body) {
        this.status = status;
        this.description = description;
        this.body = body;
    }
}