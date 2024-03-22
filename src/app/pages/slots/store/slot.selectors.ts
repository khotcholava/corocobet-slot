import { createPropertySelectors, Selector } from '@ngxs/store';
import { SlotStateModel } from './slot.model';
import { SlotState } from './slot.state';

export class SlotSelectors {
  static sliced = createPropertySelectors<SlotStateModel>(SlotState)

  @Selector([ SlotSelectors.sliced.categories ])
  static categories(categories: SlotStateModel['categories']) {
    return categories
  }

  @Selector([ SlotSelectors.sliced.games ])
  static games(games: SlotStateModel['games']) {
    return games
  }

  @Selector([ SlotSelectors.sliced.providers ])
  static providers(providers: SlotStateModel['providers']) {
    return providers
  }

  @Selector([ SlotSelectors.sliced.slotsByProvider ])
  static slotsByProvider(slotsByProvider: SlotStateModel['slotsByProvider']) {
    return slotsByProvider
  }
}
