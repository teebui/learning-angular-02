import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/user';
import { UserService } from '../../shared/services/user.service';

@Component({
    selector: 'my-user-list',
    templateUrl: './app/users/user-list/user-list.component.html',
})

export class UserListComponent implements OnInit {
    users: User[];

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.userService.getUsers().subscribe(us => this.users = us);
     }
}