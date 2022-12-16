import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth-service.service';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.scss']
})
export class AuthenticateComponent implements OnInit {

  isAuthenticated = true;
  constructor(private authService: AuthService) { }
  

  ngOnInit(): void {
    if(this.authService.user) {
      this.isAuthenticated = true;
    }
  }

}
