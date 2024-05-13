import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { VisitDTO } from '../../../models';

@Injectable({
  providedIn: 'root'
})
export class VisitService {

  http = inject(HttpClient);

  getAll() {
    return this.http.get<VisitDTO[]>('/api/visit');
  }

  getOne(id: number) {
    return this.http.get<VisitDTO>('/api/visit/' + id);    
  }

  create(visit: VisitDTO) {
    return this.http.post<VisitDTO>('/api/visit', visit);
  }
}