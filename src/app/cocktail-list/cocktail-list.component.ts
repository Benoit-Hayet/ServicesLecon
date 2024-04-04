import { NgForOf } from '@angular/common';
import {CocktailService} from "../services/cocktail.service";
import { Component } from '@angular/core';
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

  constructor(private CocktailService: CocktailService) {
  }

  ngOnInit(): void {
    this.getCocktails();
  }
  getCocktails(): void {
    this.cocktails = this.CocktailService.getCocktails();
  }

}