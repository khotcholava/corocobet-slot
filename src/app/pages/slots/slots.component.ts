import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { FilterItemComponent, GameCardComponent, SidebarItemComponent, SliderComponent } from '../../components';
import { Store } from '@ngxs/store';
import {
  FetchGamesWithCategories,
  GetSlotByProviders,
  GetSlotProviders,
  Provider,
  SetGames,
  SlotGameCategory,
  SlotSelectors
} from './store';
import { AsyncPipe, JsonPipe, NgClass, NgForOf } from '@angular/common';
import { SlotCategoryEnum } from '../../core/enums/slot-category.enum';
import { Nullable } from '../../core/interfaces/util';
import { TranslocoPipe } from '@ngneat/transloco';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { combineLatest } from 'rxjs';

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
    NgClass,
    NgForOf
  ],
  templateUrl: './slots.component.html',
  styleUrl: './slots.component.scss'
})
export class SlotsComponent implements OnInit {
  private store = inject(Store);
  private destroyRef$ = inject(DestroyRef);

  categories$ = this.store.select(SlotSelectors.categories);
  games$ = this.store.select(SlotSelectors.games);
  providers$ = this.store.select(SlotSelectors.providers);

  selectedProvider: Nullable<Provider> = null;
  selectedCategory: Nullable<SlotGameCategory> = null;
  expanded = false;

  ngOnInit() {
    combineLatest([
      this.store.dispatch(new FetchGamesWithCategories()),
      this.store.dispatch(new GetSlotProviders())]).pipe(
      takeUntilDestroyed(this.destroyRef$)
    ).subscribe();

    this.categories$.pipe(
      takeUntilDestroyed(this.destroyRef$)
    ).subscribe(categories => {
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
    this.selectedCategory = category;
    this.selectedProvider = null;
    this.store.dispatch(new SetGames(category?.games));
  }

  selectProvider(provider: Provider) {
    this.selectedProvider = provider;
    this.selectedCategory = null;
    this.store.dispatch(new GetSlotByProviders(provider.provider));
  }

  toggleProviders() {
    this.expanded = !this.expanded;
  }
}
