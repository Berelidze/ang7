import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HeaederComponent } from './heaeder/heaeder.component';
import { FooterrComponent } from './footerr/footerr.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MainComponent,HeaederComponent,FooterrComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ang7';
}
