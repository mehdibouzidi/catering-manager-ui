import { CommonCriteria } from "../commoncriteria";

export class ProductCriteria extends CommonCriteria{
    id: number;
    code: string;
    name: string;
    subCategoryId: number;
    unitId: number;
    typeId: number;

    constructor(){
        super();
        this.id = null;
        this.code = null;
        this.name = null;
        this.subCategoryId = null;
        this.unitId = null;
        this.typeId = null;
    }
}