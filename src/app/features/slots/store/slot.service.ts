import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../../common/common.interface';
import { SlotGameCategory } from './slot.model';
import { environment } from '../../../environment/environment';

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
}
