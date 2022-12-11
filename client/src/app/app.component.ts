import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';
  isLogedIn = false;
  constructor(public authService: AuthService) {

  }

}
