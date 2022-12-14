import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Estate } from 'src/app/shared/models/estate.model';
import { EstateService } from 'src/app/shared/services/estate.service';

@Injectable({
  providedIn: 'root',
})
export class EstateResolver implements Resolve<Estate | null> {
  constructor(private estateService: EstateService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    const estateId = route.params['id'];
    // if (!estateId) {
    //   this.router.navigate(['/estates']);
    //   return null;
    // }
    // return this.estateService.getById(estateId);
  }
}
