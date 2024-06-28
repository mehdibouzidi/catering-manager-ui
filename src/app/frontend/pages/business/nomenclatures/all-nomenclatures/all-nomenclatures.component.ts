import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NomenclatureCriteria } from 'src/app/backend/criteria/business/nomenclaturecriteria';
import { GlobalPayload } from 'src/app/backend/payloads/business/global/globalpayload';
import { NomenclaturePayload } from 'src/app/backend/payloads/business/nomenclaturepayload';
import { NomenclatureService } from 'src/app/backend/service/business/nomenclature.service';
import { AddNomenclatureComponent } from '../add-nomenclature/add-nomenclature.component';

@Component({
  selector: 'app-all-nomenclatures',
  templateUrl: './all-nomenclatures.component.html',
  styleUrls: ['./all-nomenclatures.component.css']
})
export class AllNomenclaturesComponent implements OnInit {

 
 //Front Variables
 displayedColumns: string[] = ['name', 'code', 'product', 'maxBuyPrice', 'isSummerPrice', 'isAutumnPrice', 'isWinterPrice', 'isSpringPrice', 'actions'];
 dataSource;
 @ViewChild(MatPaginator) paginator: MatPaginator;
 @ViewChild(MatSort) sort: MatSort;

 
 //Back Variables
 criteria = new NomenclatureCriteria();
 globalPayload = new GlobalPayload<NomenclaturePayload>();



 
 //------------Initialization
 constructor(private service: NomenclatureService, private router: Router, private _liveAnnouncer: LiveAnnouncer,
   public dialog: MatDialog
 ){

 }

 ngOnInit(): void {
   this.dataSource = new MatTableDataSource<NomenclaturePayload>();
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
     next:(response: GlobalPayload<NomenclaturePayload>) =>{
       if(response!=null){
         this.globalPayload = response;
         this.dataSource = new MatTableDataSource<NomenclaturePayload>(this.globalPayload.elements);
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
 const dialogRef = this.dialog.open(AddNomenclatureComponent, {
   width: '250px'
 });

 dialogRef.afterClosed().subscribe(result => {
   console.log('The dialog was closed');
 });
}

}
