import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BloodDonar } from './content/blood-donar';

@Injectable()
export class DonarService {
  baseUrl : string;
  constructor(private http: HttpClient) { 
    this.baseUrl ="http://localhost:3000/jsondbServer";
  }
  findAll():Observable<BloodDonar[]> {
     return this.http.get<BloodDonar[]>(this.baseUrl);
  }
}
