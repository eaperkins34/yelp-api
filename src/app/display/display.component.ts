import { Injectable, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiServiceService } from '../services/api-service.service' 
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})

export class DisplayComponent implements OnInit {
  public response: any[]
  yelpSearch: FormGroup

  constructor(private http: HttpClient, private _fb: FormBuilder, private apiService: ApiServiceService) { }

  ngOnInit() {
    // this.yelpSearch = this._fb.group({
    //   price: new FormControl(),
    //   location: new FormControl()
    // })
  }

  onSubmit(price: number, location: string) {
    this.apiService.getBusinesses(price, location)
      .subscribe((response) => {
        console.log(response)
        return this.response = response;
      })

  }
}
