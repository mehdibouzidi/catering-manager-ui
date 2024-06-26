import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './frontend/dashboard/dashboard.component';
import { HomeComponent } from './frontend/home/home.component';
import { ProfileComponent } from './frontend/pages/admin/profile/profile.component';
import { AllFamillesComponent } from './frontend/pages/business/familles/all-familles/all-familles.component';
import { AllNomenclaturesComponent } from './frontend/pages/business/nomenclatures/all-nomenclatures/all-nomenclatures.component';
import { AllUnitesComponent } from './frontend/pages/business/unites/all-unites/all-unites.component';
import { AllProductsComponent } from './frontend/pages/business/products/all-products/all-products.component';
import { AllProductTypesComponent } from './frontend/pages/business/typeproduit/all-product-types/all-product-types.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'familles', component: AllFamillesComponent },
  { path: 'products', component: AllProductsComponent },
  { path: 'producttypes', component: AllProductTypesComponent },
  { path: 'nomenclatures', component: AllNomenclaturesComponent },
  { path: 'unites', component: AllUnitesComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
