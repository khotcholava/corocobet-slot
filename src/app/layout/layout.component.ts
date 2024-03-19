import { Component } from '@angular/core';
import { NgFor, NgOptimizedImage } from '@angular/common';
import { MENU_ITEMS } from './menu-items';
import { TranslocoPipe } from '@ngneat/transloco';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgFor,
    TranslocoPipe
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

  protected readonly MENU_ITEMS = MENU_ITEMS;
}
