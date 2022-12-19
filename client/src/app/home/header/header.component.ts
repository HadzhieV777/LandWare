import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  visible = true;

  constructor(private responsive: BreakpointObserver) {}

  ngOnInit(): void {
    this.responsive.observe([Breakpoints.XSmall]).subscribe((result) => {
      this.navIsVisible = false;

      if (result.matches) {
        this.menuIconVar = true;
      }
    });
  }

  menuIconVar: boolean = true;
  navIsVisible: boolean = false;

  openMenu() {
    this.navIsVisible = !this.navIsVisible;
    this.menuIconVar = !this.menuIconVar;
  }
}
