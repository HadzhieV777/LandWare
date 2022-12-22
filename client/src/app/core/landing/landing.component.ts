import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { bounceIn } from 'src/app/shared/animations/bounce';
import { pageAnimations } from 'src/app/shared/animations/single-el-animations';
import { AuthService } from 'src/app/shared/services/auth-service.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  animations: [pageAnimations, bounceIn]
})
export class LandingComponent implements OnInit {
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
