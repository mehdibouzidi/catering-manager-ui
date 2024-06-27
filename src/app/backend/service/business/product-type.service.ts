import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductTypeCriteria } from '../../criteria/business/producttypecriteria';
import { RequestsConstants } from '../util/RequestsConstants';
import { UtilStatic } from '../util/UtilStatic';
import { ProductTypePayload } from '../../payloads/business/producttypepayload';

@Injectable({
  providedIn: 'root'
})
export class ProductTypeService {

    
  constructor(private http: HttpClient) { 
  }

  findAllByCriteria(criteria: ProductTypeCriteria){
    return this.http.post( `${RequestsConstants.PRODUCT_TYPE_FINDALL_CRITERIA_REQ}`, criteria);
  }

  findAll(){
    return this.http.get( `${RequestsConstants.PRODUCT_TYPE_FINDALL_REQ}`);
  }

  add(payload: ProductTypePayload){
    return this.http.post( RequestsConstants.PRODUCT_TYPE_ADD_REQ, payload);
  }

  update(payload: ProductTypePayload) {
    return this.http.put( RequestsConstants.PRODUCT_TYPE_UPDATE_REQ, payload);
  }

  get(productTypeId: number){
    const url = `${RequestsConstants.PRODUCT_TYPE_REQ}${UtilStatic.SLASH}${productTypeId}`;
    return this.http.get(url);
  }

  delete(productTypeId: number){
    const url = `${RequestsConstants.PRODUCT_TYPE_DELETE_REQ}${UtilStatic.SLASH}${productTypeId}`;
    return this.http.delete( url);
  }
}
