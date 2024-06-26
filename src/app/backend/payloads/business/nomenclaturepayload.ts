import { ProductPayload } from "./productpayload";

export class NomenclaturePayload {
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