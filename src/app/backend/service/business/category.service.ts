import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestsConstants } from '../util/RequestsConstants';
import { CategoryPayload } from '../../payloads/business/categorypayload';
import { UtilStatic } from '../util/UtilStatic';
import { CategoryCriteria } from '../../criteria/business/categorycriteria copy';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  constructor(private http: HttpClient) { 
  }

  findAllByCriteria(criteria: CategoryCriteria){
    return this.http.post( `${RequestsConstants.CATEGORY_FINDALL_CRITERIA_REQ}`, criteria);
  }

  add(payload: CategoryPayload){
    return this.http.post( RequestsConstants.CATEGORY_ADD_REQ, payload);
  }

  update(payload: CategoryPayload) {
    return this.http.put( RequestsConstants.CATEGORY_UPDATE_REQ, payload);
  }

  get(categoryId: number){
    const url = `${RequestsConstants.CATEGORY_REQ}${UtilStatic.SLASH}${categoryId}`;
    return this.http.get(url);
  }

  delete(categoryId: number){
    const url = `${RequestsConstants.CATEGORY_DELETE_REQ}${UtilStatic.SLASH}${categoryId}`;
    return this.http.delete( url);
  }
    
}
