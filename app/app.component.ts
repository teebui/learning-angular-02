import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'
import { User } from './shared/models/user'
import { UserService } from './shared/services/user.service';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html'
})

export class AppComponent implements OnInit {
  users: User[]

  constructor(private userService: UserService ) {}

  ngOnInit() {
    // get users
    this.userService.getUsers()
      .subscribe((data: User[]) => this.users = data);
  }
}