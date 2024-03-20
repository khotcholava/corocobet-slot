import { Component } from '@angular/core';
import { NgFor, NgOptimizedImage } from '@angular/common';
import { MENU_ITEMS } from './menu-items';
import { TranslocoPipe } from '@ngneat/transloco';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SidebarItemComponent } from "./sidebar-item/sidebar-item.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgFor,
    TranslocoPipe,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    SidebarItemComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  protected readonly MENU_ITEMS = MENU_ITEMS;
}
