import { CommonCriteria } from "../commoncriteria";

export class SubCategoryCriteria extends CommonCriteria{
    id: number;
    code: string;
    name: string;
    categoryId: number;
    categoryCode: string;
    categoryName: string;

    constructor(){
        super();
        this.id = null;
        this.code = null;
        this.name = null;
        this.categoryId = null;
        this.categoryCode = null;
        this.categoryName = null;
    }
}