import { Component } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Food } from '../models/food';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-heaeder',
  imports: [CommonModule],
  templateUrl: './heaeder.component.html',
  styleUrl: './heaeder.component.scss'
})
export class HeaederComponent {
  foodArray: Food[] = [];
  allFood: Food[] = []; 
  constructor(private httpFood: ServiceService){}
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
  number = 0
}
