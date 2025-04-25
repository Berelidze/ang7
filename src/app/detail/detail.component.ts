import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Food } from '../models/food';
import { ServiceService } from '../service/service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  product: Food | null = null;

  constructor(
    private route: ActivatedRoute,
    private httpFood: ServiceService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.loadProduct(id);
    });
  }
  

  loadProduct(id: number) {
    this.httpFood.getById(id).subscribe((data: Food) => {
      console.log(data);
      this.product = data;
    });
  }
}


 
