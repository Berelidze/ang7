import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Food } from '../models/food';
import { ServiceService } from '../service/service.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { foodType } from '../models/foodType';
import { BasketService, Basket, postBasket } from '../service/basket.service';
import { SignalService } from '../service/signal.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  inputValue: number = NaN;
  foodArray: Food[] = [];
  allFood: Food[] = [];
  TypeArray: foodType[] = [];
  allType: foodType[] = [];
  basket: Basket[] = [];

  constructor(
    private httpFood: ServiceService,
    private basketService: BasketService,
    private signal : SignalService
  ) {}

  ngOnInit() {
    this.httpFood.getAllData().subscribe((resp: Food[]) => {
      this.foodArray = resp;
      this.allFood = resp;
      this.getTypeOfFood();
      this.basketService.getBasket().subscribe((data) => {
        this.basketItems = data;
        console.log(this.basketItems)
        this.signal.setBascketCount(this.basketItems.length)
      })
      
    });

    
  }
  basketItems: postBasket[] = [];
  clickedStars: Set<number> = new Set();

  onStarClick(id: number, price: number): void {
    if (this.isInBasket(id)) return;

    const product: postBasket = {
      productId: id,
      price: price,
      quantity: 1
    };

    this.basketService.addToBasket(product).subscribe({
      next: () => {
        this.basketItems.push(product);
        this.signal.updateBasketCountUp()
      },
      error: (err) => console.error('Error adding to basket:', err)
    });
  }

  isInBasket(id: number): boolean {
    return this.basketItems.some(item => item.productId === id);
  }


  getSpiceFilter() {
    this.foodArray = this.allFood.filter(
      (food) => food.spiciness === this.inputValue
    );
    const section = document.getElementById('section');
    if (this.inputValue >= 0 && this.inputValue <= 4) {
      if (section) section.style.display = 'none';
    } else {
      if (section) section.style.display = 'flex';
    }
    this.reset();
  }

  resetButton() {
    this.foodArray = this.allFood.filter(
      (food) => food.spiciness >= 0 && food.spiciness <= 4
    );
    this.inputValue = NaN;
    const section = document.getElementById('section');
    if (section) section.style.display = 'none';
    this.reset();
  }

  reset() {
    const selects = document.querySelectorAll('.select') as NodeListOf<HTMLSelectElement>;
    selects.forEach(select => {
      select.value = "0";
    });
  }

  getVegSelect() {
    const veg = document.querySelectorAll('#veg') as NodeListOf<HTMLInputElement>;
    veg.forEach((element) => {
      if (element.value === "veg") {
        this.foodArray = this.allFood.filter(food => food.vegeterian);
      } else if (element.value === "nveg") {
        this.foodArray = this.allFood.filter(food => !food.vegeterian);
      } else if (element.value === "0") {
        this.foodArray = [...this.allFood];
      }
      const section = document.getElementById('section');
      if (section) section.style.display = 'none';
    });
    const selects = document.querySelectorAll('.wov') as NodeListOf<HTMLSelectElement>;
    selects.forEach(select => {
      select.value = "0";
      this.inputValue = NaN;
    });
  }

  getNutSelect() {
    const nut = document.querySelectorAll('#nut') as NodeListOf<HTMLInputElement>;
    nut.forEach((element) => {
      if (element.value === "nut") {
        this.foodArray = this.allFood.filter(food => food.nuts);
      } else if (element.value === "nnut") {
        this.foodArray = this.allFood.filter(food => !food.nuts);
      } else if (element.value === "0") {
        this.foodArray = [...this.allFood];
      }
    });
    const selects = document.querySelectorAll('.won') as NodeListOf<HTMLSelectElement>;
    selects.forEach(select => {
      select.value = "0";
      this.inputValue = NaN;
    });
    const section = document.getElementById('section');
    if (section) section.style.display = 'none';
  }

  getTypeOfFood() {
    this.httpFood.getFoodType().subscribe((resp: any[]) => {
      this.TypeArray = resp;
    });
  }

  filterByCategory(event: Event) {
    const target = event.target as HTMLSelectElement;
    const id = parseInt(target.value);

    if (id === 0) {
      this.foodArray = this.allFood;
    } else {
      this.foodArray = this.allFood.filter(food => food.categoryId === id);
    }
    const selects = document.querySelectorAll('.wos') as NodeListOf<HTMLSelectElement>;
    selects.forEach(select => {
      select.value = "0";
      this.inputValue = NaN;
    });
    const section = document.getElementById('section');
    if (section) section.style.display = 'none';
  }
}


 