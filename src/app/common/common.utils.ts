import { map, Observable } from 'rxjs';
import { ApiResponse } from './common.interface';

export function extractData<T>() {
  return (source: Observable<ApiResponse<T>>) => source.pipe(
    map((r) => r.data)
  );
}
