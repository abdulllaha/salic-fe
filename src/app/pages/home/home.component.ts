import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from 'src/app/components/layout/layout.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LayoutComponent, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
