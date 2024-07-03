import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastsService {

  constructor(private toast: ToastrService) {}

  showSuccessMessage(message: string, title: string){
    this.toast.success(message, title);
  }

  showErrorMessage(message: string, title: string){
    this.toast.error(message, title);
  }

  showWarningMessage(message: string, title: string){
    this.toast.warning(message, title);
  }

}
