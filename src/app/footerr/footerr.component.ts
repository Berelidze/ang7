import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footerr',
  imports: [CommonModule,],
  templateUrl: './footerr.component.html',
  styleUrl: './footerr.component.scss'
})
export class FooterrComponent {
  color = 'red';
}
