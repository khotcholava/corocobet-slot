import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Provider, SlotGameCategory } from './slot.model';
import { environment } from '../../../environment/environment';
import { ApiResponse, extractData, filterCategories } from '../../../core';

@Injectable({
  providedIn: 'root'
})
export class SlotService {
  private baseURL = environment.apiUrl;
  private http = inject(HttpClient);

  public fetchGamesWithCategories(): Observable<SlotGameCategory[]> {
    return this.http.get<ApiResponse<SlotGameCategory[]>>(`${this.baseURL}/v2/slot/categories`, {
      params: {
        include: 'games'
      }
    }).pipe(
      extractData(),
      filterCategories()
    );
  }

  public getSlotByProviders(provider: string): Observable<SlotGameCategory> {
    return this.http.get<ApiResponse<SlotGameCategory>>(`${this.baseURL}/v2/slot/providers/${provider}`, {
      params: {
        type: 'slot',
        platform: 'desktop'
      }
    }).pipe(
      extractData(),
    );
  }

  public getProvidersList(): Observable<Provider[]> {
    return this.http.get<ApiResponse<Provider[]>>(`${this.baseURL}`, {
      params: {
        type: 'slot',
        platform: 'desktop'
      }
    }).pipe(
      extractData(),
    );
  }
}
