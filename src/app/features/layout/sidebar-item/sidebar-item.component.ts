import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { MenuItem } from "../../../core";
import { TranslocoPipe } from "@ngneat/transloco";

@Component({
  selector: 'app-sidebar-item',
  standalone: true,
  imports: [
    RouterLinkActive,
    RouterLink,
    TranslocoPipe
  ],
  templateUrl: './sidebar-item.component.html',
  styleUrl: './sidebar-item.component.scss'
})
export class SidebarItemComponent {
  menuItem = input.required<MenuItem>()
}
