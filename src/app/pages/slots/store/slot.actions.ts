import { SlotGame } from './slot.model';

export class FetchGamesWithCategories {
  static readonly type = '[Slots] Get Slots';
}

export class GetSlotByProviders {
  static readonly type = '[Slots] Get Slots By Providers';

  constructor(public readonly provider: string) {
  }
}

export class GetSlotProviders {
  static readonly type = '[Slots] Get Providers';
}

export class SetGames {
  static readonly type = '[Slots] Set Games';

  constructor(public readonly games: SlotGame[]) {
  }
}

