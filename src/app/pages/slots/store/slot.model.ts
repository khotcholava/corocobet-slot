import { SlotCategoryEnum } from '../../../core/enums/slot-category.enum';
import { Nullable } from '../../../core/interfaces/util';

export interface SlotStateModel {
  categories: SlotGameCategory[];
  games: SlotGame[];
  providers: Provider[];
  slotsByProvider: Provider[];
}

export interface SlotGameCategory {
  type: string;
  category: SlotCategoryEnum;
  platform: string;
  name: string;
  order: 1;
  games: SlotGame[];
  totalGames: number;
  group: string;
}

export interface SlotGame {
  game_id: string;
  name: string;
  provider: string;
  providerName: string;
  hasLargeImage: boolean;
  image: string;
  imageSet: ImageSet;
  url: string;
  order: number;
  tags: any[];
  stats: any[];
  favoriteCount: number;
  gameId: string;
  image2: string;
}

export interface ImageSet {
  blurhash: Nullable<string>;
  original: string;
  webp: string;
}

export interface Provider {
  _id: string;
  name: string;
  iframeW: number;
  iframeH: number;
  vendor: string;
  provider: string;
  type: string;
  order: number;
  enabled: boolean;
  logo: string;
  tags: string[];
  gamesCount: number;
}
