import { Entity } from "./entity";

export class Course extends Entity {
    name;
    description;
    code;

    constructor(id, name, description, code) {
        super(id, 0);
        this.name = name;
        this.description = description;
        this.code = code;
    }
}