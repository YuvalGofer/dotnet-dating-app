import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Change detaction in angular is done by the angular framework
  // it check if the data 
  title = 'The dating app';
  users: any;
  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {
    this.getUsers();
  }
  getUsers() {
    this.http.get('https://localhost:5001/api/users').subscribe(
      // Response => {
      //   this.users = Response;
      // },
      // error => {
      //   console.log(error)
      // },
      // () => {
      //   console.log('Finished')
      // }
      {
        next: (Response) => {
          this.users = Response; console.log(Response);
        },//What to do with return data
        error: (error) => { console.log(error); },//What to do with error
        complete: () => { console.log("Finished"); }//What to do when finished
      }
    )
  }
}
