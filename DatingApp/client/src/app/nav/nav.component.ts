import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'app/models/user';
import { AccountService } from 'app/services/account.service';
import { error } from 'console';
import { ToastrService } from 'ngx-toastr';
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
  constructor(private accountService: AccountService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.currentUser$ = this.accountService.currentUser$;
  }

  ngOnInit(): void {
  }
  login() {
    this.accountService.login(this.model)
      .subscribe({
        next: response => {
          this.router.navigateByUrl('members');
          console.log(response);
          // this.loggedIn = true;
        },
        error: ({ error }) => {
          if (!(error.errors && typeof error.errors === 'object')) {
            return this.toastr.error(error) as any;
          }
          for (const key in error.errors) {
            if (error.errors.hasOwnProperty(key)) {
              this.toastr.error(error.errors[key])
            }
          }
          console.log(error);
        }
      });
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/');
    // this.loggedIn = false;
  }
}
