import { createPropertySelectors, Selector } from '@ngxs/store';
import { SlotStateModel } from './slot.model';
import { SlotState } from './slot.state';

export class SlotSelectors {
  static sliced = createPropertySelectors<SlotStateModel>(SlotState)

  @Selector([ SlotSelectors.sliced.categories ])
  static categories(categories: SlotStateModel['categories']) {
    return categories
  }

  @Selector([ SlotSelectors.sliced.selectedCategory ])
  static selectedCategory(selectedCategory: SlotStateModel['selectedCategory']) {
    return selectedCategory
  }

  @Selector([ SlotSelectors.sliced.games ])
  static games(games: SlotStateModel['games']) {
    return games
  }
}
