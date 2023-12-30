import { CanActivateFn } from '@angular/router';
import { methods } from '../utils/Func';

export const guardGuard: CanActivateFn = (route, state) => {
  const result = methods.VerifyToken();
  return false;
};
