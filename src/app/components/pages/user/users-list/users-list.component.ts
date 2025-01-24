import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../../services/users.services';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [],
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  users: any[] = [];
  availableRoles: string[] = ['ROLE_ADMIN', 'ROLE_USER']; // Rôles disponibles

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService
      .getUsers()
      .then((response) => {
        this.users = response.data;
        this.users.forEach((user) => {
          user.selectedRole = user.roles[0];
        });

        console.log(this.users);
      })
      .catch((error) => {
        console.error('Erreur ', error);
      });
  }
}
