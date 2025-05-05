import { Component, effect } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Food } from '../models/food';
import { CommonModule } from '@angular/common';
import { Basket, BasketService, postBasket } from '../service/basket.service';
import { SignalService } from '../service/signal.service';

@Component({
  selector: 'app-heaeder',
  imports: [CommonModule],
  templateUrl: './heaeder.component.html',
  styleUrl: './heaeder.component.scss',
  standalone: true
})
export class HeaederComponent {
  [x: string]: any;
  foodArray: Food[] = [];
  allFood: Food[] = []; 
  basket: any[] = [];
  constructor(
    private httpFood: ServiceService,
    private basketService: BasketService,
        private signal : SignalService
  ){

    effect(()=> {
      this.number = this.signal.basketCount()
    })
  }
  ngOnInit() {
    this.httpFood.getAllData().subscribe((resp: Food[]) => {
      this.foodArray = resp;
      this.allFood = resp;
    });
    this.loadBasket();
    
  }
  basketShow = false
  basketOpen(){
    this.basketShow =true
    this.basketService.getBasket().subscribe((data) => {
      this.basket = data;
      this.number = this.basket.length
    });
    // const baket = document.querySelectorAll('.left');
    // baket.forEach((element) => {
    //   (element as HTMLElement).style.display = 'flex';
    // });
  }
  basketClose(){
    this.basketShow =false
    // const baket = document.querySelectorAll('.left');
    // baket.forEach((element) => {
    //   (element as HTMLElement).style.display = 'none';
    // });
  }
  loadBasket() {
    this.basketService.getBasket().subscribe((data) => {
      this.basket = data;
      this.number = this.basket.length
    });
  }
  number = 0


  deleteProduct(id : number){
    this.basketService.deleteFromBasket(id).subscribe(resp => {
      this.basketService.getBasket().subscribe((data) => {
        this.basket = data;
        this.number = this.basket.length
        this.signal.updateBasketCountDown()
      });
    })
 
  }

  updateBusketUp(id: number, price: number, quantity:number){
    const product: postBasket = {
      productId: id,
      price: price,
      quantity: quantity+1
    };
        this.basketService.updateBasket(product).subscribe({
      next: () => {
        this.basketService.getBasket().subscribe((data) => {
          this.basket = data;
          this.number = this.basket.length
        });
      },
      error: (err) => console.error('Error adding to basket:', err)
    });
  }
  updateBusketDown(id: number, price: number, quantity:number){
    const product: postBasket = {
      productId: id,
      price: price,
      quantity: quantity-1
    };
        this.basketService.updateBasket(product).subscribe({
      next: () => {
        this.basketService.getBasket().subscribe((data) => {
          this.basket = data;
          this.number = this.basket.length
        });
      },
      error: (err) =>{
        console.error('Error adding to basket:', err)
        alert(JSON.stringify(err.error))
      }
    });
  }




}
