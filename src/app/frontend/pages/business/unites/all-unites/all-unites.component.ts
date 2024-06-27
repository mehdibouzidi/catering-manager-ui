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
import { AddUniteComponent } from '../add-unite/add-unite.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-all-unites',
  templateUrl: './all-unites.component.html',
  styleUrls: ['./all-unites.component.css']
})
export class AllUnitesComponent implements OnInit  {
  
  //Front Variables
  displayedColumns: string[] = ['name', 'code', 'actions'];
  dataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  
  //Back Variables
  criteria = new UnitCriteria();
  globalPayload = new GlobalPayload<UnitPayload>();



  
  //------------Initialization
  constructor(private service: UnitService, private router: Router, private _liveAnnouncer: LiveAnnouncer,
    public dialog: MatDialog
  ){

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
          this.globalPayload = response;
          this.dataSource = new MatTableDataSource<UnitPayload>(this.globalPayload.elements);
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

 //------------Dialogs
 openAddDialog(): void {
  const dialogRef = this.dialog.open(AddUniteComponent, {
    width: '250px'
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  });
}

}
