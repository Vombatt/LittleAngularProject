import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CoreModule } from '../core.module';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: CoreModule,
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router,
              private authService: AuthService,
  ) { }

  public canActivate(): boolean  {
    if (!this.authService.isAuth()) {
      this.router.navigate(['authentication']);
      return false;
    }
    return true;
  }

}
