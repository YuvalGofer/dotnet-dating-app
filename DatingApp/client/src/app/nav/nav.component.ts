import { Component, OnInit } from '@angular/core';
import { User } from 'app/models/user';
import { AccountService } from 'app/services/account.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  loggedIn: boolean = false;
  // using 2 way binding (update the view <=>component)
  
  model: any = {};
currentUser$?: Observable<User>;
  constructor(private accountService: AccountService) { 
    this.currentUser$=this.accountService.currentUser$;
  }

  ngOnInit(): void {
  }
  login() {
    this.accountService.login(this.model)
      .subscribe({
        next: response => {
          console.log(response);
          // this.loggedIn = true;
        },
        error: error => {
          console.log(error);
        }
      });
  }
  logout() {
    this.accountService.logout();
    // this.loggedIn = false;
  }
  //get the current user
  // getCurrentUser() {
  //   this.accountService.currentUser$.subscribe({
  //     next: user => {
  //       this.loggedIn = !!user;
  //     },
  //     error: error => {
  //       console.log(error);
  //     }
  //   });
  // }
}
