import { Action, State, StateContext } from '@ngxs/store';
import { SlotStateModel } from './slot.model';
import { inject, Injectable } from '@angular/core';
import { SlotService } from './slot.service';
import { FetchGamesWithCategories, SelectCategory, SetGames } from './slot.actions';
import { tap } from 'rxjs';

@State<SlotStateModel>({
  name: 'slots',
  defaults: {
    categories: [],
    games: [],
    providers: [],
    selectedCategory: null,
  }
})
@Injectable()
export class SlotState {
  private slotsService = inject(SlotService);

  @Action(FetchGamesWithCategories)
  getGames(ctx: StateContext<SlotStateModel>, {payload}: FetchGamesWithCategories) {
    return this.slotsService.fetchGamesWithCategories(payload).pipe(
      tap((categories) => {
        ctx.patchState({
          categories
        });
      })
    );
  }

  @Action(SelectCategory)
  selectCategory(ctx: StateContext<SlotStateModel>, {payload}: SelectCategory) {
    ctx.patchState({
      selectedCategory: payload
    });
  }

  @Action(SetGames)
  setGames(ctx: StateContext<SlotStateModel>, {games}: SetGames) {
    ctx.patchState({
      games
    });
  }
}
