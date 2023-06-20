import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tour } from '../model/tour';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TourserviceService {
  getTour() {
    throw new Error('Method not implemented.');
  }

  
  constructor(private http:HttpClient) { }
  BaseUrl='assets/Data/tour.json'

  ngOnInit():void{}
  getfoods():Observable<Tour[]>{
    return this.http.get<Tour[]>(`${this.BaseUrl}`)
  }
}
