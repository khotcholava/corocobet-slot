import { SlotGame, SlotGameCategory } from './slot.model';

export class FetchGamesWithCategories {
  static readonly type = '[Slots] Get Slots';
  constructor(public payload: any) {
  }
}

export class GetSlotCategories {
  static readonly type = '[Slots] Get Categories';
}

export class GetSlotProviders {
  static readonly type = '[Slots] Get Providers';
}


export class SelectCategory {
  static readonly type = '[Slots] Select Category';
  constructor(public readonly payload: SlotGameCategory) {
  }
}


export class SetGames {
  static readonly type = '[Slots] Set Games';
  constructor(public readonly games: SlotGame[]) {
  }
}

