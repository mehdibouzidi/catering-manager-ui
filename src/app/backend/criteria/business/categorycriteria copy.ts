import { CommonCriteria } from "../commoncriteria";

export class CategoryCriteria extends CommonCriteria{
    id: number;
    code: string;
    name: string;

    constructor(){
        super();
        this.id = null;
        this.code = null;
        this.name = null;
    }
}