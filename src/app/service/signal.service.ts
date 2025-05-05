import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignalService {

  constructor() { }

  basketCount = signal(0)
  setBascketCount(amount : number){
    this.basketCount.set(amount)
  }

  updateBasketCountUp(){
    this.basketCount.update(value => value+1)
  }
  updateBasketCountDown(){
    this.basketCount.update(value => value-1)
  }

}
