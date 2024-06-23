import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { UnitCriteria } from 'src/app/backend/criteria/business/unitcriteria';
import { GlobalPayload } from 'src/app/backend/payloads/business/global/globalpayload';
import { UnitPayload } from 'src/app/backend/payloads/business/unitpayload';
import { UnitService } from 'src/app/backend/service/business/unit.service';


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
@Component({
  selector: 'app-all-unites',
  templateUrl: './all-unites.component.html',
  styleUrls: ['./all-unites.component.css']
})
export class AllUnitesComponent implements OnInit  {
  
  //Front Variables
  displayedColumns: string[] = ['name', 'code'];
  dataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  //Back Variables
  criteria = new UnitCriteria();
  unitCriteria = new UnitCriteria();
  payload = new GlobalPayload<UnitPayload>();
  
  //------------Initialization
  constructor(private service: UnitService, private router: Router, private _liveAnnouncer: LiveAnnouncer){

  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<UnitPayload>();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.search();
  }

  //------------Methods
  announceSortChange(sortState: Sort) {
    this.criteria.sortColumn = sortState.active;
    this.criteria.sort = sortState.direction;
    this.search();
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  onPaginationChange(event?:PageEvent){
    this.criteria.pages =  event.pageIndex;
    this.criteria.size = event.pageSize;
    this.search();
    return event;
  }
  checkCriteria(){
    this.criteria.name = this.criteria.name == "" ?  null : this.criteria.name;
    this.criteria.code = this.criteria.code == "" ? null: this.criteria.code;
  }

  findByCriteria(){
    this.service.findAllByCriteria(this.criteria).subscribe({
      next:(response: GlobalPayload<UnitPayload>) =>{
        if(response!=null){
          this.payload = response;
          this.dataSource = new MatTableDataSource<UnitPayload>(this.payload.elements);

          //this.dataSource.paginator.pageIndex = 1;
          //this.dataSource.paginator.pageSize = 10;
        }
      },
      error:()=>{
      }
    });
  }
  
  search(){
    this.checkCriteria();
    this.findByCriteria();
  }

}
