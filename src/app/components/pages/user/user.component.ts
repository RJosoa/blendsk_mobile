import { Component } from '@angular/core';
import { UsersListComponent } from "./users-list/users-list.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [UsersListComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

}
