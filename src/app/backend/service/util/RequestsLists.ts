import { Request } from "../../payloads/Request";
import { BusinessConstants } from "./BusinessConstants";
import { RequestsConstants } from "./RequestsConstants";
import { UtilStatic } from "./UtilStatic";

export class RequestsLists{
    static readonly GET: string = 'GET';
    static readonly POST: string = 'POST';
    static readonly PUT: string = 'PUT';
    static readonly DELETE: string = 'DELETE';

   static readonly REQ_WITHOUT_BEARER:Request[]= [
        new Request(RequestsLists.GET, RequestsConstants.CATEGORY_REQ),
        new Request(RequestsLists.POST, RequestsConstants.CATEGORY_ADD_REQ),
        new Request(RequestsLists.PUT, RequestsConstants.CATEGORY_UPDATE_REQ),
        new Request(RequestsLists.DELETE, RequestsConstants.CATEGORY_DELETE_REQ),
        new Request(RequestsLists.POST, RequestsConstants.CATEGORY_FINDALL_REQ),
        new Request(RequestsLists.POST, RequestsConstants.CATEGORY_FINDALL_CRITERIA_REQ),

        new Request(RequestsLists.GET, RequestsConstants.SUB_CATEGORY_REQ),
        new Request(RequestsLists.POST, RequestsConstants.SUB_CATEGORY_ADD_REQ),
        new Request(RequestsLists.PUT, RequestsConstants.SUB_CATEGORY_UPDATE_REQ),
        new Request(RequestsLists.DELETE, RequestsConstants.SUB_CATEGORY_DELETE_REQ),
        new Request(RequestsLists.POST, RequestsConstants.SUB_CATEGORY_FINDALL_REQ),
        new Request(RequestsLists.POST, RequestsConstants.SUB_CATEGORY_FINDALL_CRITERIA_REQ),

        new Request(RequestsLists.GET, RequestsConstants.INGREDIENT_REQ),
        new Request(RequestsLists.POST, RequestsConstants.INGREDIENT_ADD_REQ),
        new Request(RequestsLists.PUT, RequestsConstants.INGREDIENT_UPDATE_REQ),
        new Request(RequestsLists.DELETE, RequestsConstants.INGREDIENT_DELETE_REQ),
        new Request(RequestsLists.POST, RequestsConstants.INGREDIENT_FINDALL_REQ),
        new Request(RequestsLists.POST, RequestsConstants.INGREDIENT_FINDALL_CRITERIA_REQ),

        new Request(RequestsLists.GET, RequestsConstants.UNIT_REQ),
        new Request(RequestsLists.POST, RequestsConstants.UNIT_ADD_REQ),
        new Request(RequestsLists.PUT, RequestsConstants.UNIT_UPDATE_REQ),
        new Request(RequestsLists.DELETE, RequestsConstants.UNIT_DELETE_REQ),
        new Request(RequestsLists.POST, RequestsConstants.UNIT_FINDALL_REQ),
        new Request(RequestsLists.POST, RequestsConstants.UNIT_FINDALL_CRITERIA_REQ),

    ];

    

}