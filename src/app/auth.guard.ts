import { Router, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { CuentasManagerService } from './cuentasmanager/cuentasmanager.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private cuentasManager: CuentasManagerService, private router: Router) { }

  canActivate() {

    if (!this.cuentasManager.EstaLogueadoIn()) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}