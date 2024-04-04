import { NgForOf } from '@angular/common';
import {CocktailService} from "../services/cocktail.service";
import { Component, inject } from '@angular/core';
import { Cocktail } from '../model/cocktail.model';

@Component({
  selector: 'app-cocktail-list',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.scss'
})
export class CocktailListComponent {
  cocktails: Cocktail[] = [];

  private cocktailService = inject(CocktailService);

  ngOnInit(): void {
    this.cocktailService.getCocktails().subscribe(cocktailsFromJsonFile => {
      this.cocktails = cocktailsFromJsonFile;
    });

  }
}