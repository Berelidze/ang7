import { Component } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Food } from '../models/food';
import { CommonModule } from '@angular/common';
import { Basket, BasketService } from '../service/basket.service';

@Component({
  selector: 'app-heaeder',
  imports: [CommonModule],
  templateUrl: './heaeder.component.html',
  styleUrl: './heaeder.component.scss'
})
export class HeaederComponent {
  [x: string]: any;
  foodArray: Food[] = [];
  allFood: Food[] = []; 
  basket: Basket[] = [];
  constructor(
    private httpFood: ServiceService,
    private basketService: BasketService
  ){}
  ngOnInit() {
    this.httpFood.getAllData().subscribe((resp: Food[]) => {
      this.foodArray = resp;
      this.allFood = resp;
    });
    this.loadBasket();
  }
  basketOpen(){
    const baket = document.querySelectorAll('.left');
    baket.forEach((element) => {
      (element as HTMLElement).style.display = 'flex';
    });
  }
  basketClose(){
    const baket = document.querySelectorAll('.left');
    baket.forEach((element) => {
      (element as HTMLElement).style.display = 'none';
    });
  }
  loadBasket() {
    this.basketService.getBasket().subscribe((data) => {
      this.basket = data;
    });
  }
  number = 0
}
