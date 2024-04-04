import { Injectable } from '@angular/core';
import { Cocktail } from '../model/cocktail.model';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor() { }

  getCocktails (): Cocktail[]{ 
    return [
      { name: "Mojito", price: 8.99, imageSrc: "assets/mojito.jpg" },
      { name: "Cosmopolitan", price: 9.99, imageSrc: "assets/cosmopolitan.jpg" },
      { name: "Margarita", price: 7.99, imageSrc: "assets/margarita.png" },
      { name: "Piña Colada", price: 8.50, imageSrc: "assets/pina_colada.png" },
      { name: "Mai Tai", price: 10.50, imageSrc: "assets/mai_tai.png" },
      { name: "Caipirinha", price: 9.00, imageSrc: "assets/caipirinha.png" },
      { name: "Bloody Mary", price: 8.75, imageSrc: "assets/bloody_mary.png" },
      { name: "Sex on the Beach", price: 9.25, imageSrc: "assets/sex_on_the_beach.png" },
      { name: "Long Island Iced Tea", price: 11.00, imageSrc: "assets/long_island_iced_tea.png" }
    ];
  }
}
