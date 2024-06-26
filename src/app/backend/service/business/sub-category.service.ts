import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestsConstants } from '../util/RequestsConstants';
import { UtilStatic } from '../util/UtilStatic';
import { SubCategoryPayload } from '../../payloads/business/subcategorypayload';
import { SubCategoryCriteria } from '../../criteria/business/subcategorycriteria';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {

  constructor(private http: HttpClient) { 
  }

  findAllByCriteria(criteria: SubCategoryCriteria){
    return this.http.post( `${RequestsConstants.SUB_CATEGORY_FINDALL_CRITERIA_REQ}`, criteria);
  }

  add(payload: SubCategoryPayload){
    return this.http.post( RequestsConstants.SUB_CATEGORY_ADD_REQ, payload);
  }

  update(payload: SubCategoryPayload) {
    return this.http.put( RequestsConstants.SUB_CATEGORY_UPDATE_REQ, payload);
  }

  get(subCategoryId: number){
    const url = `${RequestsConstants.SUB_CATEGORY_REQ}${UtilStatic.SLASH}${subCategoryId}`;
    return this.http.get(url);
  }

  delete(subCategoryId: number){
    const url = `${RequestsConstants.SUB_CATEGORY_DELETE_REQ}${UtilStatic.SLASH}${subCategoryId}`;
    return this.http.delete( url);
  }
}
