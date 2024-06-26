import { CommonCriteria } from "../commoncriteria";

export class NomenclatureCriteria extends CommonCriteria{
    id: number;
    code: string;
    name: string;
    productCode: string;
    productName: string;

    constructor(){
        super();
        this.id = null;
        this.code = null;
        this.name = null;
        this.productCode = null;
        this.productName = null;
    }
}