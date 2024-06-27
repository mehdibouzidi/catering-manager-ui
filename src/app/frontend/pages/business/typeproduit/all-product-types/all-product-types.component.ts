import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ProductTypeCriteria } from 'src/app/backend/criteria/business/producttypecriteria';
import { GlobalPayload } from 'src/app/backend/payloads/business/global/globalpayload';
import { ProductTypePayload } from 'src/app/backend/payloads/business/producttypepayload';
import { ProductTypeService } from 'src/app/backend/service/business/product-type.service';
import { AddProductTypeComponent } from '../add-product-type/add-product-type.component';

@Component({
  selector: 'app-all-product-types',
  templateUrl: './all-product-types.component.html',
  styleUrls: ['./all-product-types.component.css']
})
export class AllProductTypesComponent implements OnInit {

 //Front Variables
 displayedColumns: string[] = ['name', 'code', 'actions'];
 dataSource;
 @ViewChild(MatPaginator) paginator: MatPaginator;
 @ViewChild(MatSort) sort: MatSort;

 
 //Back Variables
 criteria = new ProductTypeCriteria();
 globalPayload = new GlobalPayload<ProductTypePayload>();



 
 //------------Initialization
 constructor(private service: ProductTypeService, private router: Router, private _liveAnnouncer: LiveAnnouncer,
   public dialog: MatDialog
 ){

 }

 ngOnInit(): void {
   this.dataSource = new MatTableDataSource<ProductTypePayload>();
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
     next:(response: GlobalPayload<ProductTypePayload>) =>{
       if(response!=null){
         this.globalPayload = response;
         this.dataSource = new MatTableDataSource<ProductTypePayload>(this.globalPayload.elements);
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
 const dialogRef = this.dialog.open(AddProductTypeComponent, {
   width: '250px'
 });

 dialogRef.afterClosed().subscribe(result => {
   console.log('The dialog was closed');
 });
}

}
