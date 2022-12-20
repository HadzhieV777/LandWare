import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth-service.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss'],
})
export class UserDashboardComponent implements OnInit {
  constructor(
    public authService: AuthService,
    private responsive: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.responsive.observe('(min-width: 1024px)').subscribe((result) => {
      this.hidePointer = true;

      if (result.matches) {
        this.changeWidth = false;
        this.hidePointer = true;
        this.hideContent = false;
        this.hideOverlay = true;
      }
    });
    this.responsive.observe('(max-width: 1024px)').subscribe((result) => {
      if (result.matches) {
        this.changeWidth = false;
        this.hidePointer = false;
        this.hideContent = false;
        this.hideOverlay = false;
      }
    });
  }

  changeWidth: boolean = false;
  hidePointer: boolean = true;
  hideContent: boolean = false;
  turnPointer: boolean = true;
  hideOverlay: boolean = true;

  openMenu() {
    this.changeWidth = !this.changeWidth;
    this.hideContent = !this.hideContent;
    this.turnPointer = !this.turnPointer;
    this.hideOverlay = !this.hideOverlay;
  }
}
