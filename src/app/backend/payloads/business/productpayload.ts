import { ProductTypePayload } from "./producttypepayload";
import { SubCategoryPayload } from "./subcategorypayload";
import { UnitPayload } from "./unitpayload";

export class ProductPayload {
    id: number;
    code: string;
    name: string;
    casubCategorytegory: SubCategoryPayload;
    unit: UnitPayload;
    type: ProductTypePayload;
}