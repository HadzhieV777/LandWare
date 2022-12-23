import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth-service.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss', '../shared.scss']
})
export class PageComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (this.authService.user) {
      this.router.navigate(['/dashboard']);
    }
  }

  hideData: boolean = true;

  showHiddenData() {
    this.hideData = !this.hideData
  }


}
