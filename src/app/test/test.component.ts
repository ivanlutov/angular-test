import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
    result = "123";
    constructor(private httpClient: HttpClient) {}

    ngOnInit() {
      console.log("before result is: " + this.result)
  
      this.httpClient.get("/api/HelloFunction").subscribe((data: any) => {
        console.log("response is: " + data)
        this.result = data;
      })  
  
      console.log("after result is: " + this.result)
    }
}
