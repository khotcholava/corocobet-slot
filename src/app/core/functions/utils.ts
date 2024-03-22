import { map, Observable, OperatorFunction } from 'rxjs';
import { ApiResponse } from "../interfaces/api.type";
import { SlotGameCategory } from '../../pages/slots';

export function extractData<T>() {
  return (source: Observable<ApiResponse<T>>) => source.pipe(
    map((r) => r.data)
  );
}

export function filterCategories(): OperatorFunction<SlotGameCategory[], SlotGameCategory[]> {
  return source => source.pipe(
    map(categories => {
      return categories.filter(category => {
        return category?.platform !== 'mobile'
          && category.totalGames > 0
          && !category.group
          && category.group !== ''
          || category.category === 'web:new_games';
      });
    })
  );
}
