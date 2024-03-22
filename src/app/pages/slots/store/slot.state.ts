import { Action, State, StateContext } from '@ngxs/store';
import { SlotStateModel } from './slot.model';
import { inject, Injectable } from '@angular/core';
import { SlotService } from './slot.service';
import { FetchGamesWithCategories, GetSlotByProviders, GetSlotProviders, SetGames } from './slot.actions';
import { tap } from 'rxjs';

@State<SlotStateModel>({
  name: 'slots',
  defaults: {
    categories: [],
    games: [],
    providers: [],
    slotsByProvider: [],
  }
})
@Injectable()
export class SlotState {
  private slotsService = inject(SlotService);

  @Action(FetchGamesWithCategories)
  getGames(ctx: StateContext<SlotStateModel>) {
    return this.slotsService.fetchGamesWithCategories().pipe(
      tap((categories) => {
        ctx.patchState({
          categories
        });
      })
    );
  }

  @Action(SetGames)
  setGames(ctx: StateContext<SlotStateModel>, {games}: SetGames) {
    return ctx.patchState({
      games
    });
  }

  @Action(GetSlotByProviders)
  getSlotsByProvider(ctx: StateContext<SlotStateModel>, {provider}: GetSlotByProviders) {
    return this.slotsService.getSlotByProviders(provider).pipe(
      tap((slotsByProvider) => {
        ctx.patchState({
          games: slotsByProvider.games
        });
      })
    );
  }

  @Action(GetSlotProviders)
  getProviders(ctx: StateContext<SlotStateModel>) {
    return this.slotsService.getProvidersList().pipe(
      tap((providers) => {
        ctx.patchState({
          providers
        });
      })
    );
  }
}
