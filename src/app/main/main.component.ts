import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Food } from '../models/food';
import { ServiceService } from '../service/service.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [CommonModule,RouterModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent  implements OnInit {
  constructor(private httpFood : ServiceService) { }
  ngOnInit(){
    this.httpFood.getData().subscribe((resp : any) => {
      console.log(resp);
      this.getFood(resp);
    });
  }
  getFood(arr : Food[]){
    this.foodArray = arr;
  }
}
