import { map, Observable } from 'rxjs';
import { ApiResponse } from "../interfaces/api.type";

export function extractData<T>() {
  return (source: Observable<ApiResponse<T>>) => source.pipe(
    map((r) => r.data)
  );
}

