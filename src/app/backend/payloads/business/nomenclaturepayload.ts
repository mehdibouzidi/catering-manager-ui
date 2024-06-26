import { ProductTypePayload } from "./producttypepayload";
import { SubCategoryPayload } from "./subcategorypayload";
import { UnitPayload } from "./unitpayload";

export class ProductPayload {
    id: number;
    code: string;
    name: string;

    maxBuyPrice: number;

    summerPrice: number;
    autumnPrice: number;
    winterPrice: number;
    springPrice: number;

    isSummerPrice: boolean;
    isAutumnPrice: boolean;
    isWinterPrice: boolean;
    isSpringPrice: boolean;

    product: ProductPayload;
}