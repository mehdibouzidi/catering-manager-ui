import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './frontend/layout/header/header.component';
import { SidebarComponent } from './frontend/layout/sidenav/sidenav.component';
import { HomeComponent } from './frontend/home/home.component';
import { DashboardComponent } from './frontend/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {A11yModule} from '@angular/cdk/a11y';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import {OverlayModule} from '@angular/cdk/overlay';
import { MainComponent } from './frontend/main/main.component';
import { RouterLinkActiveExactDirective } from './frontend/main/appRouterLinkActiveExact.directive';
import { ProfileComponent } from './frontend/pages/admin/profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddUniteComponent } from './frontend/pages/business/unites/add-unite/add-unite.component';
import { EditUniteComponent } from './frontend/pages/business/unites/edit-unite/edit-unite.component';
import { ShowUniteComponent } from './frontend/pages/business/unites/show-unite/show-unite.component';
import { AllNomenclaturesComponent } from './frontend/pages/business/nomenclatures/all-nomenclatures/all-nomenclatures.component';
import { AddNomenclatureComponent } from './frontend/pages/business/nomenclatures/add-nomenclature/add-nomenclature.component';
import { ShowNomenclatureComponent } from './frontend/pages/business/nomenclatures/show-nomenclature/show-nomenclature.component';
import { EditNomenclatureComponent } from './frontend/pages/business/nomenclatures/edit-nomenclature/edit-nomenclature.component';
import { AllFamillesComponent } from './frontend/pages/business/familles/all-familles/all-familles.component';
import { ShowFamilleComponent } from './frontend/pages/business/familles/show-famille/show-famille.component';
import { ShowSousFamilleComponent } from './frontend/pages/business/familles/show-sous-famille/show-sous-famille.component';
import { AddFamilleComponent } from './frontend/pages/business/familles/add-famille/add-famille.component';
import { AddSousFamilleComponent } from './frontend/pages/business/familles/add-sous-famille/add-sous-famille.component';
import { EditFamilleComponent } from './frontend/pages/business/familles/edit-famille/edit-famille.component';
import { EditSousFamilleComponent } from './frontend/pages/business/familles/edit-sous-famille/edit-sous-famille.component';
import { AllUnitesComponent } from './frontend/pages/business/unites/all-unites/all-unites.component';
import { HttpClientModule } from '@angular/common/http';
import { AllProductsComponent } from './frontend/pages/business/products/all-products/all-products.component';
import { AddProductComponent } from './frontend/pages/business/products/add-product/add-product.component';
import { EditProductComponent } from './frontend/pages/business/products/edit-product/edit-product.component';

const MATERIAL_MODULES =  [
  A11yModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    OverlayModule,
    PortalModule,
    ScrollingModule,
];
// Import FormsModule
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    DashboardComponent,
    MainComponent,
    RouterLinkActiveExactDirective,
    ProfileComponent,
    AllUnitesComponent,
    AddUniteComponent,
    EditUniteComponent,
    ShowUniteComponent,
    AllNomenclaturesComponent,
    AddNomenclatureComponent,
    ShowNomenclatureComponent,
    EditNomenclatureComponent,
    AllProductsComponent,
    AddProductComponent,
    EditProductComponent,
    ShowFamilleComponent,
    AllFamillesComponent,
    ShowFamilleComponent,
    ShowSousFamilleComponent,
    AddFamilleComponent,
    AddSousFamilleComponent,
    EditFamilleComponent,
    EditSousFamilleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule, 
    // * MATERIAL IMPORTS
    MATERIAL_MODULES
  ],
  exports: [
    MATERIAL_MODULES
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
