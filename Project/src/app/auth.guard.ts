import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);

  // Check if the user is logged in and has the 'admin' role
  const role = sessionStorage.getItem('role');
  if (role === 'admin') {
    return true;
  } else {
    router.navigate(['/']); // Redirect to home or login page
    return false; // Deny access
  }
};
