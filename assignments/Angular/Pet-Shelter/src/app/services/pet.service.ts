import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Pet } from '../pet';

@Injectable({
  providedIn: 'root',
})
export class PetService {
  private base = '/api/pets';

  constructor(private http: HttpClient) {}

  getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.base);
  }

  getPet(id: string): Observable<Pet> {
    return this.http.get<Pet>(`${this.base}/${id}`);
  }

  createPet(pet: Pet): Observable<Pet> {
    return this.http.post<Pet>(this.base, pet);
  }

  editPet(id: string): Observable<Pet> {
    return this.http.get<Pet>(`${this.base}/${id}/edit`);
  }

  updatePet(pet: Pet): Observable<Pet> {
    return this.http.put<Pet>(`${this.base}/${pet._id}/edit`, pet);
  }
  deletePet(pet: Pet): Observable<Pet> {
    return this.http.delete<Pet>(`${this.base}/${pet._id}`);
  }
}
