import { CategoryPayload } from "./categorypayload";

export class SubCategoryPayload {
    id: number;
    name: string;
    category: CategoryPayload;
}