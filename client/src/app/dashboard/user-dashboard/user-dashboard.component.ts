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
      this.hidePointer = false;

      if (result.matches) {
        this.changeWidth = false;
        this.hidePointer = true;
        this.hideContent = false;
      }
    });
  }

  changeWidth: boolean = false;
  hidePointer: boolean = true;
  hideContent: boolean = false;
  turnPointer: boolean = true;
  hideOverlay: boolean = false;

  openMenu() {
    this.changeWidth = !this.changeWidth;
    this.hideContent = !this.hideContent;
    this.turnPointer = !this.turnPointer;
    this.hideOverlay = !this.hideOverlay;
  }
}
