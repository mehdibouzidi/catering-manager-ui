import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ProductCriteria } from 'src/app/backend/criteria/business/productcriteria';
import { GlobalPayload } from 'src/app/backend/payloads/business/global/globalpayload';
import { ProductPayload } from 'src/app/backend/payloads/business/productpayload';
import { AddProductComponent } from '../add-product/add-product.component';
import { ProductService } from 'src/app/backend/service/business/product.service';
import { SubCategoryService } from 'src/app/backend/service/business/sub-category.service';
import { UnitService } from 'src/app/backend/service/business/unit.service';
import { ProductTypeService } from 'src/app/backend/service/business/product-type.service';
import { SubCategoryPayload } from 'src/app/backend/payloads/business/subcategorypayload';
import { UnitPayload } from 'src/app/backend/payloads/business/unitpayload';
import { ProductTypePayload } from 'src/app/backend/payloads/business/producttypepayload';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {


  //Front Variables
  displayedColumns: string[] = ['code','name','f.name', 'sf.name','unit', 'type','actions'];
  dataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  subCategoryControl = new FormControl();
  unitControl = new FormControl();
  typeControl = new FormControl();

  
  //Back Variables
  criteria = new ProductCriteria();
  globalPayload = new GlobalPayload<ProductPayload>();

  subCategories: Array<SubCategoryPayload>;
  units: Array<UnitPayload>;
  types: Array<ProductTypePayload>;
  filteredSubCategories: Observable<any[]>;
  filteredUnits: Observable<any[]>;
  filteredTypes: Observable<any[]>;
  
  //------------Initialization
  constructor(private service: ProductService, private subCategoryService: SubCategoryService, private unitService: UnitService,
    private typeService: ProductTypeService, 
    private router: Router, private _liveAnnouncer: LiveAnnouncer,
    public dialog: MatDialog
  ){
    this.findAllSubCategories();
    this.findAllUnits();
    this.findAllTypes();
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<ProductPayload>();
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
    this.criteria.subCategoryName = this.criteria.subCategoryName == "" ? null: this.criteria.subCategoryName;
    this.criteria.unitName = this.criteria.unitName == "" ? null: this.criteria.unitName;
    this.criteria.typeName = this.criteria.typeName == "" ? null: this.criteria.typeName;
  }

  findByCriteria(){
    this.service.findAllByCriteria(this.criteria).subscribe({
      next:(response: GlobalPayload<ProductPayload>) =>{
        if(response!=null){
          this.globalPayload = response;
          this.dataSource = new MatTableDataSource<ProductPayload>(this.globalPayload.elements);
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

  findAllSubCategories(){
    this.subCategoryService.findAll().subscribe({
      next:(response: Array<SubCategoryPayload>) =>{
        if(response!=null){
          this.subCategories = response;
          this.filteredSubCategories = this.subCategoryControl.valueChanges
          .pipe(
            startWith(''),
            map(value => this._filterSubCategories(value))
          );
        }
      },
      error:()=>{
      }
    });
  }

  findAllUnits(){
    this.unitService.findAll().subscribe({
      next:(response: Array<UnitPayload>) =>{
        if(response!=null){
          this.units = response;
          this.filteredUnits = this.unitControl.valueChanges
          .pipe(
            startWith(''),
            map(value => this._filterUnits(value))
          );
        }
      },
      error:()=>{
      }
    });
  }

  findAllTypes(){
    this.typeService.findAll().subscribe({
      next:(response: Array<ProductTypePayload>) =>{
        if(response!=null){
          this.types = response;
          this.filteredTypes = this.typeControl.valueChanges
          .pipe(
            startWith(''),
            map(value => this._filterTypes(value))
          );
        }
      },
      error:()=>{
      }
    });
  }

  private _filterSubCategories(value: string): string[] {
    const filterValue = value.toLowerCase();
    this.criteria.subCategoryName = value;
    return this.subCategories.filter(option => option.name.toLowerCase().includes(filterValue)).map(option => option.name);
  }

  private _filterUnits(value: string): string[] {
    const filterValue = value.toLowerCase();
    this.criteria.unitName = value;
    return this.units.filter(option => option.name.toLowerCase().includes(filterValue)).map(option => option.name);
  }

  private _filterTypes(value: string): string[] {
    const filterValue = value.toLowerCase();
    this.criteria.typeName = value;
    return this.types.filter(option => option.name.toLowerCase().includes(filterValue)).map(option => option.name);
  }
 //------------Dialogs
 openAddDialog(): void {
  const dialogRef = this.dialog.open(AddProductComponent, {
    width: '250px'
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  });
}

}
