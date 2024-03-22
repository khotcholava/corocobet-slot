import { Component, input } from '@angular/core';
import { NgStyle } from '@angular/common';
import { SlotGame } from "../../pages/slots";

@Component({
  selector: 'app-game-card',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.scss'
})
export class GameCardComponent {
  game = input.required<SlotGame>();
}
