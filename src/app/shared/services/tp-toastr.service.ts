import { Injectable, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class TpToastrService {
    toastrService = inject(ToastrService);

  success(title: string, message = ''): void {
    this.toastrService.success(message, title, {
      toastClass: 'ngx-toastr tp-toastr success',
    });
  }

  error(title: string, message = ''): void {
    this.toastrService.error(message, title, {
      toastClass: 'ngx-toastr tp-toastr error',
    });
  }
}