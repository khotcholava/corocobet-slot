export interface SlotGameCategory {
  type: string;
  category: string;
  platform: string;
  name: string;
  order: 1;
  games: SlotGame[];
  totalGames: number;
}

export interface SlotGame {
  game_id: string
  name: string
  provider: string
  providerName: string
  hasLargeImage: boolean
  image: string
  imageSet: ImageSet
  url: string
  order: number
  tags: any[]
  stats: any[]
  favoriteCount: number
  gameId: string
  image2: string
}

export interface ImageSet {
  blurhash: string
  original: string
  webp: string
}

export interface Provider {
  _id: string
  name: string
  iframeW: number
  iframeH: number
  vendor: string
  provider: string
  type: string
  order: number
  enabled: boolean
  logo: string
  tags: string[]
  gamesCount: number
}
