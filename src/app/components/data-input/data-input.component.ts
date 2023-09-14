import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/services/api/api.service';
@Component({
  selector: 'app-data-input',
  templateUrl: './data-input.component.html',
  styleUrls: ['./data-input.component.css']
})
export class DataInputComponent {
  model = { variable: '', timestamp: '', value: 0 };

  constructor(private http: HttpClient, private apiService: ApiService) { }

  submitData() {
    console.log(this.model);
    let params = { ...this.model };

    this.apiService.callapi('POST_TIMESERIES', params, null, 'post').subscribe(
      (response: any) => {
        console.log(response)
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
