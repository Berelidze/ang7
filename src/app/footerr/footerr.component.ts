import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footerr',
  imports: [CommonModule,RouterLink],
  templateUrl: './footerr.component.html',
  styleUrl: './footerr.component.scss'
})
export class FooterrComponent {
  color = 'red';
}
