import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Utente } from 'src/app/model/utente';
import { LoginService } from 'src/app/services/login/login.service';
import { AddressDialogComponent } from './address-dialog/address-dialog.component';
import { Indirizzo } from 'src/app/model/indirizzo';
import { IndirizzoService } from 'src/app/services/indirizzo/indirizzo.service';
import { ToastsService } from 'src/app/services/toasts/toasts.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  loggedUser?: Utente;
  selezionato: Indirizzo | null | undefined;

  constructor(private loginService: LoginService, public dialog: MatDialog, private indirizzoService: IndirizzoService, private toastService: ToastsService) { }

  ngOnInit() {
    this.loginService.loggedUser.subscribe((loggedUser) => {
      this.loggedUser = loggedUser;
    });
  }

  openAddressDialog(): void {
    const dialogRef = this.dialog.open(AddressDialogComponent);
  }

  deleteAddress(): void {
    if (this.selezionato) {
      const id = this.selezionato.id;
      this.indirizzoService.deleteAddress(id).subscribe(async () =>{
          const loggedUser = await this.loginService.getUser(this.loggedUser?.username, this.loggedUser?.password);
          if (loggedUser) {
            this.loginService.aggiornaUtente(loggedUser);
            this.toastService.showSuccessMessage("Hai eliminato l'indirizzo", "Successo");
          }
      });
    } else {
      this.toastService.showErrorMessage("Ops qualcosa è andato storto", "Errore");
    }
  }

  updateSelectedAddress(){
    if(this.selezionato){
      this.indirizzoService.indirizzoSelezionato.next(this.selezionato);
      this.openAddressDialog();
    }
  }



}



