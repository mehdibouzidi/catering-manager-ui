import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import {MatButtonModule} from '@angular/material/button';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './frontend/layout/header/header.component';
import { SidebarComponent } from './frontend/layout/sidenav/sidenav.component';
import { HomeComponent } from './frontend/home/home.component';
import { DashboardComponent } from './frontend/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MainComponent } from './frontend/main/main.component';
import { RouterLinkActiveExactDirective } from './frontend/main/appRouterLinkActiveExact.directive';
import { ProfileComponent } from './frontend/pages/admin/profile/profile.component';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // * MATERIAL IMPORTS
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
