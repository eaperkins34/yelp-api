import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'authorization': "Bearer 1wtQ7jCbWVdb4-Re9bzIxGdpq0O1u7Up1QZFq8AbufYys9ibbu4ufvEmso1ZKk5Cm0iwSvSgNuO5H_2CJtkkcJknK-t32xWjny726aFaXBjhnCFT6p22ou0JNwIbXHYx"
  })
}

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private yelpUrl = "https://api.yelp.com/v3/businesses/search?text=search&term=restaurants&location="
  private clientID ="2DpX7V3T1xVr9OTEzxWEiQ"
  private corsUrl="https://cors-anywhere.herokuapp.com/"

  constructor(private _http: HttpClient) { }

  getBusinesses(price:number, location:string): Observable<any> {
    return this._http.get<any>(`${this.corsUrl}${this.yelpUrl}${location}&price=${price}`, httpOptions)
  }
}
