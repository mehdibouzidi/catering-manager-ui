import { environment } from "src/environments/environment";
import { BusinessConstants } from "./BusinessConstants";
import { UtilStatic } from "./UtilStatic";


export class RequestsConstants{
    static readonly API_SOURCE: string = environment.api_source;


 //BUSINESS
    //CATEGORY
    static readonly CATEGORY_REQ = RequestsConstants.API_SOURCE + BusinessConstants.CATEGORY;
    static readonly CATEGORY_ADD_REQ = RequestsConstants.CATEGORY_REQ + UtilStatic.SLASH + UtilStatic.ADD;
    static readonly CATEGORY_UPDATE_REQ = RequestsConstants.CATEGORY_REQ + UtilStatic.SLASH + UtilStatic.UPDATE;
    static readonly CATEGORY_DELETE_REQ = RequestsConstants.CATEGORY_REQ + UtilStatic.SLASH + UtilStatic.DELETE;
    static readonly CATEGORY_FINDALL_REQ = RequestsConstants.CATEGORY_REQ + UtilStatic.SLASH + UtilStatic.FIND_ALL;
    static readonly CATEGORY_FINDALL_CRITERIA_REQ = RequestsConstants.CATEGORY_REQ + UtilStatic.SLASH + UtilStatic.FIND_ALL_BY_CRITERIA;
    //SUB CATEGORY
    static readonly SUB_CATEGORY_REQ = RequestsConstants.API_SOURCE + BusinessConstants.SUB_CATEGORY;
    static readonly SUB_CATEGORY_ADD_REQ = RequestsConstants.SUB_CATEGORY_REQ + UtilStatic.SLASH + UtilStatic.ADD;
    static readonly SUB_CATEGORY_UPDATE_REQ = RequestsConstants.SUB_CATEGORY_REQ + UtilStatic.SLASH + UtilStatic.UPDATE;
    static readonly SUB_CATEGORY_DELETE_REQ = RequestsConstants.SUB_CATEGORY_REQ + UtilStatic.SLASH + UtilStatic.DELETE;
    static readonly SUB_CATEGORY_FINDALL_REQ = RequestsConstants.SUB_CATEGORY_REQ + UtilStatic.SLASH + UtilStatic.FIND_ALL;
    static readonly SUB_CATEGORY_FINDALL_CRITERIA_REQ = RequestsConstants.SUB_CATEGORY_REQ + UtilStatic.SLASH + UtilStatic.FIND_ALL_BY_CRITERIA;
    //INGREDIENT
    static readonly INGREDIENT_REQ = RequestsConstants.API_SOURCE + BusinessConstants.INGREDIENT;
    static readonly INGREDIENT_ADD_REQ = RequestsConstants.INGREDIENT_REQ + UtilStatic.SLASH + UtilStatic.ADD;
    static readonly INGREDIENT_UPDATE_REQ = RequestsConstants.INGREDIENT_REQ + UtilStatic.SLASH + UtilStatic.UPDATE;
    static readonly INGREDIENT_DELETE_REQ = RequestsConstants.INGREDIENT_REQ + UtilStatic.SLASH + UtilStatic.DELETE;
    static readonly INGREDIENT_FINDALL_REQ = RequestsConstants.INGREDIENT_REQ + UtilStatic.SLASH + UtilStatic.FIND_ALL;
    static readonly INGREDIENT_FINDALL_CRITERIA_REQ = RequestsConstants.INGREDIENT_REQ + UtilStatic.SLASH + UtilStatic.FIND_ALL_BY_CRITERIA;
    //UNIT
    static readonly UNIT_REQ = RequestsConstants.API_SOURCE + BusinessConstants.UNIT;
    static readonly UNIT_ADD_REQ = RequestsConstants.UNIT_REQ + UtilStatic.SLASH + UtilStatic.ADD;
    static readonly UNIT_UPDATE_REQ = RequestsConstants.UNIT_REQ + UtilStatic.SLASH + UtilStatic.UPDATE;
    static readonly UNIT_DELETE_REQ = RequestsConstants.UNIT_REQ + UtilStatic.SLASH + UtilStatic.DELETE;
    static readonly UNIT_FINDALL_REQ = RequestsConstants.UNIT_REQ + UtilStatic.SLASH + UtilStatic.FIND_ALL;
    static readonly UNIT_FINDALL_CRITERIA_REQ = RequestsConstants.UNIT_REQ + UtilStatic.SLASH + UtilStatic.FIND_ALL_BY_CRITERIA;
}