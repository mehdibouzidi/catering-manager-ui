import { SubCategoryPayload } from "./subcategorypayload";
import { UnitPayload } from "./unitpayload";

export class IngredientPayload {
    id: number;
    name: string;
    casubCategorytegory: SubCategoryPayload;
    unit: UnitPayload;
}