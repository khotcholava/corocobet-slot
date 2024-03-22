import { Component, inject, OnInit } from '@angular/core';
import { SliderComponent } from '../../components/slider/slider.component';
import { FilterItemComponent } from './ui/filter-item/filter-item.component';
import { Store } from '@ngxs/store';
import {
  FetchGamesWithCategories,
  GetSlotByProviders,
  GetSlotProviders,
  SetGames
} from './store/slot.actions';
import { SlotSelectors } from './store/slot.selectors';
import { AsyncPipe, JsonPipe, NgClass } from '@angular/common';
import { SidebarItemComponent } from '../../components/layout/sidebar-item/sidebar-item.component';
import { SlotCategoryEnum } from '../../core/enums/slot-category.enum';
import { Provider, SlotGameCategory } from './store/slot.model';
import { GameCardComponent } from './ui/game-card/game-card.component';
import { Nullable } from '../../core/interfaces/util';
import { TranslocoPipe } from '@ngneat/transloco';

@Component({
  selector: 'app-slots',
  standalone: true,
  imports: [
    SliderComponent,
    FilterItemComponent,
    AsyncPipe,
    JsonPipe,
    SidebarItemComponent,
    GameCardComponent,
    TranslocoPipe,
    NgClass
  ],
  templateUrl: './slots.component.html',
  styleUrl: './slots.component.scss'
})
export class SlotsComponent implements OnInit {
  private store = inject(Store);

  categories$ = this.store.select(SlotSelectors.categories);
  games$ = this.store.select(SlotSelectors.games);
  providers$ = this.store.select(SlotSelectors.providers);
  selectedProvider: Nullable<Provider> = null;
  selectedCategory: Nullable<SlotGameCategory> = null;
  expanded = false;

  ngOnInit() {
    this.store.dispatch(new FetchGamesWithCategories({}));
    this.store.dispatch(new GetSlotProviders());
    this.categories$.pipe().subscribe(categories => {
      this.selectCategory(categories[0]);
    });
  }

  mapSlotCategoryToIcon(category: SlotCategoryEnum): string {
    switch (category) {
      case SlotCategoryEnum.POPULAR:
        return 'top-slots.svg';
      case SlotCategoryEnum.POPULAR_MAIN:
        return 'top-slots.svg';
      case SlotCategoryEnum.NEW_GAMES:
        return 'new.svg';
      case SlotCategoryEnum.BUY_BONUS:
        return 'bonus.svg';
      default:
        return '';
    }
  }

  selectCategory(category: SlotGameCategory) {
    this.store.dispatch(new SetGames(category?.games));
    this.selectedCategory = category;
    this.selectedProvider = null;
  }

  selectProvider(provider: Provider) {
    this.selectedProvider = provider;
    this.selectedCategory = null;
    this.store.dispatch(new GetSlotByProviders(provider.provider));
  }

  showMore() {
    this.expanded = !this.expanded;
  }
}
