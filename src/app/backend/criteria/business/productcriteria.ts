import { CommonCriteria } from "../commoncriteria";

export class ProductCriteria extends CommonCriteria{
    id: number;
    code: string;
    name: string;
    subCategoryName: string;
    unitName: string;
    typeName: string;

    constructor(){
        super();
        this.id = null;
        this.code = null;
        this.name = null;
        this.subCategoryName = null;
        this.unitName = null;
        this.typeName = null;
    }
}