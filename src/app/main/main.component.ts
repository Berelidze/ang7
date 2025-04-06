import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Food } from '../module/food';
import { ServiceService } from '../service/service.service';

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
  foodArray : Food[] = []
}
