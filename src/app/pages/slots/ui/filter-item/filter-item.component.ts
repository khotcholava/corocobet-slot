import { Component, input } from '@angular/core';
import { FilterItemProps } from './filter-item.types';

@Component({
  selector: 'app-filter-item',
  standalone: true,
  imports: [],
  templateUrl: './filter-item.component.html',
  styleUrl: './filter-item.component.scss'
})
export class FilterItemComponent {
  props = input.required<FilterItemProps>()
}
