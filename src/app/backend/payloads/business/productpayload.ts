import { SubCategoryPayload } from "./subcategorypayload";
import { UnitPayload } from "./unitpayload";

export class ProductPayload {
    id: number;
    name: string;
    casubCategorytegory: SubCategoryPayload;
    unit: UnitPayload;
}