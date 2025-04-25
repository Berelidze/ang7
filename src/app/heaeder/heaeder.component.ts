import { Component } from '@angular/core';

@Component({
  selector: 'app-heaeder',
  imports: [],
  templateUrl: './heaeder.component.html',
  styleUrl: './heaeder.component.scss'
})
export class HeaederComponent {
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
}
