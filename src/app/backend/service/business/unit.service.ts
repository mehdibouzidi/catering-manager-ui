import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UnitCriteria } from '../../criteria/business/unitcriteria';
import { RequestsConstants } from '../util/RequestsConstants';
import { UtilStatic } from '../util/UtilStatic';
import { UnitPayload } from '../../payloads/business/unitpayload';

@Injectable({
  providedIn: 'root'
})
export class UnitService {


  constructor(private http: HttpClient) { 
  }

  findAllByCriteria(criteria: UnitCriteria){
    return this.http.post( `${RequestsConstants.UNIT_FINDALL_CRITERIA_REQ}`, criteria);
  }
  
  findAll(){
    return this.http.get( `${RequestsConstants.UNIT_FINDALL_REQ}`);
  }

  add(payload: UnitPayload){
    return this.http.post( RequestsConstants.UNIT_ADD_REQ, payload);
  }

  update(payload: UnitPayload) {
    return this.http.put( RequestsConstants.UNIT_UPDATE_REQ, payload);
  }

  get(unitId: number){
    const url = `${RequestsConstants.UNIT_REQ}${UtilStatic.SLASH}${unitId}`;
    return this.http.get(url);
  }

  delete(unitId: number){
    const url = `${RequestsConstants.UNIT_DELETE_REQ}${UtilStatic.SLASH}${unitId}`;
    return this.http.delete( url);
  }
}
