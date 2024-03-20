import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Provider, SlotGameCategory } from './slot.model';
import { environment } from '../../../environment/environment';
import { ApiResponse } from "../../../core";

@Injectable({
  providedIn: 'root'
})
export class SlotService {
  private baseURL = environment.apiUrl;
  private http = inject(HttpClient);

  public fetchCategories(): Observable<ApiResponse<SlotGameCategory[]>> {
    return this.http.get<ApiResponse<SlotGameCategory[]>>(`${this.baseURL}/v2/slot/categories`, {
      params: {
        include: 'games'
      }
    });
  }

  public fetchProviders(): Observable<ApiResponse<Provider[]>> {
    return this.http.get<ApiResponse<Provider[]>>(`${this.baseURL}/v2/slot/providers`, {
      params: {
        type: 'slot',
        platform: 'desktop'
      }
    });
  }
}
