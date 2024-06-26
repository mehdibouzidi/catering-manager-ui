import { CategoryPayload } from "./categorypayload";

export class SubCategoryPayload {
    id: number;
    code: string;
    name: string;
    category: CategoryPayload;
}