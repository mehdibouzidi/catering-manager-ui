import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { SubCategoryCriteria } from 'src/app/backend/criteria/business/subcategorycriteria';
import { GlobalPayload } from 'src/app/backend/payloads/business/global/globalpayload';
import { SubCategoryPayload } from 'src/app/backend/payloads/business/subcategorypayload';
import { SubCategoryService } from 'src/app/backend/service/business/sub-category.service';
import { AddFamilleComponent } from '../add-famille/add-famille.component';

@Component({
  selector: 'app-all-familles',
  templateUrl: './all-familles.component.html',
  styleUrls: ['./all-familles.component.css']
})
export class AllFamillesComponent implements OnInit {


  //Front Variables
  displayedColumns: string[] = ['f.name', 'f.code', 'name','code','actions'];
  dataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  
  //Back Variables
  criteria = new SubCategoryCriteria();
  globalPayload = new GlobalPayload<SubCategoryPayload>();



  
  //------------Initialization
  constructor(private service: SubCategoryService, private router: Router, private _liveAnnouncer: LiveAnnouncer,
    public dialog: MatDialog
  ){

  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<SubCategoryPayload>();
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
    this.criteria.categoryName = this.criteria.categoryName == "" ? null: this.criteria.categoryName;
    this.criteria.categoryCode = this.criteria.categoryCode == "" ? null: this.criteria.categoryCode;
  }

  findByCriteria(){
    this.service.findAllByCriteria(this.criteria).subscribe({
      next:(response: GlobalPayload<SubCategoryPayload>) =>{
        if(response!=null){
          this.globalPayload = response;
          this.dataSource = new MatTableDataSource<SubCategoryPayload>(this.globalPayload.elements);
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
  const dialogRef = this.dialog.open(AddFamilleComponent, {
    width: '250px'
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  });
}


}
