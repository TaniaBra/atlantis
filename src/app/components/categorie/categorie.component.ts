import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Categorie } from 'src/app/model/categorie';
import { CategorieService } from 'src/app/services/categorie/categorie.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent {

  //inizializzo l'array vuoto
  categorie: Categorie[] = [];

  constructor(private categorieService: CategorieService, private router: Router) { }

  ngOnInit() {
    this.categorieService.getListaCategorie().subscribe(res => {
      this.categorie = res;
    });
  }



}
