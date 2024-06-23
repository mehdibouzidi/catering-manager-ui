import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './frontend/dashboard/dashboard.component';
import { HomeComponent } from './frontend/home/home.component';
import { ProfileComponent } from './frontend/pages/admin/profile/profile.component';
import { AllFamillesComponent } from './frontend/pages/business/familles/all-familles/all-familles.component';
import { AllIngredientsComponent } from './frontend/pages/business/ingredients/all-ingredients/all-ingredients.component';
import { AllNomenclaturesComponent } from './frontend/pages/business/nomenclature/all-nomenclatures/all-nomenclatures.component';
import { AllUnitesComponent } from './frontend/pages/business/unite/all-unites/all-unites.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'familles', component: AllFamillesComponent },
  { path: 'ingredients', component: AllIngredientsComponent },
  { path: 'nomenclatures', component: AllNomenclaturesComponent },
  { path: 'unites', component: AllUnitesComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
