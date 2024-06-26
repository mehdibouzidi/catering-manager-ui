import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductCriteria } from '../../criteria/business/productcriteria';
import { RequestsConstants } from '../util/RequestsConstants';
import { UtilStatic } from '../util/UtilStatic';
import { ProductPayload } from '../../payloads/business/productpayload';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
  constructor(private http: HttpClient) { 
  }

  findAllByCriteria(criteria: ProductCriteria){
    return this.http.post( `${RequestsConstants.PRODUCT_FINDALL_CRITERIA_REQ}`, criteria);
  }

  add(payload: ProductPayload){
    return this.http.post( RequestsConstants.PRODUCT_ADD_REQ, payload);
  }

  update(payload: ProductPayload) {
    return this.http.put( RequestsConstants.PRODUCT_UPDATE_REQ, payload);
  }

  get(productId: number){
    const url = `${RequestsConstants.PRODUCT_REQ}${UtilStatic.SLASH}${productId}`;
    return this.http.get(url);
  }

  delete(productId: number){
    const url = `${RequestsConstants.PRODUCT_DELETE_REQ}${UtilStatic.SLASH}${productId}`;
    return this.http.delete( url);
  }
}
