import { Component } from '@angular/core';
import { SliderComponent } from "../../features/slider/slider.component";

@Component({
  selector: 'app-slots',
  standalone: true,
  imports: [
    SliderComponent
  ],
  templateUrl: './slots.component.html',
  styleUrl: './slots.component.scss'
})
export class SlotsComponent {

}
