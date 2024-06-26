import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NomenclatureCriteria } from '../../criteria/business/nomenclaturecriteria';
import { RequestsConstants } from '../util/RequestsConstants';
import { UtilStatic } from '../util/UtilStatic';
import { NomenclaturePayload } from '../../payloads/business/nomenclaturepayload';

@Injectable({
  providedIn: 'root'
})
export class NomenclatureService {

  constructor(private http: HttpClient) { 
  }

  findAllByCriteria(criteria: NomenclatureCriteria){
    return this.http.post( `${RequestsConstants.NOMENCLATURE_FINDALL_CRITERIA_REQ}`, criteria);
  }

  add(payload: NomenclaturePayload){
    return this.http.post( RequestsConstants.NOMENCLATURE_ADD_REQ, payload);
  }

  update(payload: NomenclaturePayload) {
    return this.http.put( RequestsConstants.NOMENCLATURE_UPDATE_REQ, payload);
  }

  get(nomenclatureId: number){
    const url = `${RequestsConstants.NOMENCLATURE_REQ}${UtilStatic.SLASH}${nomenclatureId}`;
    return this.http.get(url);
  }

  delete(nomenclatureId: number){
    const url = `${RequestsConstants.NOMENCLATURE_DELETE_REQ}${UtilStatic.SLASH}${nomenclatureId}`;
    return this.http.delete( url);
  }
}
