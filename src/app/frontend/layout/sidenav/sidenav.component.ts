import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/frontend/services/sidebar/sidebar.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave', [
        animate(300, style({ opacity: 1 })),
      ]),
    ]),
  ],

})
export class SidebarComponent implements OnInit {


  isSidebarVisible = true;
  isDataSubmenuOpen = false;
  isOpSubmenuOpen = false;
  isDashboardSelected = false;


  constructor(private sidebarService: SidebarService) {}

  ngOnInit() {
    this.sidebarService.sidebarVisibility$.subscribe((isVisible) => {
      console.log(isVisible)
      this.isSidebarVisible = isVisible;
    });
  }

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
    this.sidebarService.toggleSidebar(); // Toggle sidebar state
  }


  toggleDataSubmenu() {
    this.isDataSubmenuOpen = !this.isDataSubmenuOpen;
  }

  toggleOpSubmenu() {
    this.isOpSubmenuOpen = !this.isOpSubmenuOpen;
  }

  selectDashboard() {
    this.isDashboardSelected = true;
  }
}
