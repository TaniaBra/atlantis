import { NgIf } from '@angular/common';
import { Component, Inject, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Indirizzo } from 'src/app/model/indirizzo';
import { Utente } from 'src/app/model/utente';
import { IndirizzoService } from 'src/app/services/indirizzo/indirizzo.service';
import { LoginService } from 'src/app/services/login/login.service';
import { ToastsService } from 'src/app/services/toasts/toasts.service';

export interface AddressDialogData {
  via: string,
  cap: string
}

@Component({
  selector: 'app-address-dialog',
  templateUrl: './address-dialog.component.html',
  styleUrls: ['./address-dialog.component.css'],
})
export class AddressDialogComponent {
  // delete
  loggedUser?: Utente;
  addressForm: FormGroup = this.fb.group({
    via: ["", [Validators.required]],
    cap: ["", [Validators.required]],
  });


  constructor(
    public dialogRef: MatDialogRef<AddressDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AddressDialogData,
    private loginService: LoginService, private indirizzoService: IndirizzoService,
    private fb: FormBuilder, private toastService: ToastsService,
  ) { }

  ngOnInit() {
    this.loginService.loggedUser.subscribe(loggedUser => {
      this.loggedUser = loggedUser;
    });
    this.indirizzoService.indirizzoSelezionato.subscribe(indirizzoSelezionato => {
      if(indirizzoSelezionato){
        this.addressForm.setValue({via: indirizzoSelezionato.via, cap: indirizzoSelezionato.cap});
      }
      else{
        this.addressForm.reset();
      }
    });
  }

  closeDialog(){
    if (this.dialogRef) {
      this.dialogRef.close();
      this.indirizzoService.indirizzoSelezionato.next(null);
    }
  }

  onNoClick(): void {
    this.closeDialog();
  }

  salvaInfo() {
    if (this.addressForm.valid) {
      const via = this.addressForm.get("via")?.value;
      const cap = this.addressForm.get("cap")?.value;
      try {
        this.loginService.saveIndirizzo({ id: null, via, cap, idUtente: this.loggedUser?.id }).subscribe(async res => {
          if (res) {
            const loggedUser = await this.loginService.getUser(this.loggedUser?.username, this.loggedUser?.password);
            if (loggedUser) {
              this.loginService.aggiornaUtente(loggedUser);
            }
          }
        });
      } catch (e) {
        console.log(e);
        this.toastService.showErrorMessage('Qualcosa è andato storto!', 'Errore')
      }
      this.dialogRef?.close();
      this.toastService.showSuccessMessage('Indirizzo salvato correttamente!', 'Successo');
    }
  }

}
