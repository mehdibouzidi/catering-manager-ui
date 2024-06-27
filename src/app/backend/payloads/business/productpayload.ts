import { ProductTypePayload } from "./producttypepayload";
import { SubCategoryPayload } from "./subcategorypayload";
import { UnitPayload } from "./unitpayload";

export class ProductPayload {
    id: number;
    code: string;
    name: string;
    subCategory: SubCategoryPayload;
    unit: UnitPayload;
    type: ProductTypePayload;
}