import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../../services/users.services';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users-roles-update',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './users-roles-update.component.html',
  styleUrl: './users-roles-update.component.scss',
})
export class UsersRolesUpdateComponent implements OnInit {
  user: any;
  userRoles: string[] = [];
  selectedRole: string = '';

  constructor(
    private userService: UsersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.getUserById(id);
  }

  getUserById(id: number) {
    this.userService
      .getUserById(id)
      .then((response) => {
        this.user = response.data;
        this.userRoles = this.user.roles;
        console.log('User :', this.user);
        console.log('User Roles :', this.userRoles);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des données de l'utilisateur :",
          error
        );
      });
  }

  onSubmit() {
    if (!this.selectedRole) {
      console.error('Aucun rôle sélectionné');
      return;
    }
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const updatedRoles = { roles: [this.selectedRole] };
    this.userService
      .updateUserRoles(id, updatedRoles)
      .then(() => {
        this.router.navigate(['/user']);
        console.log('User roles updated successfully');
      })
      .catch((error) => {
        console.error('Error updating user roles:', error);
      });
  }

  onRoleChange() {
    console.log('Selected Role:', this.selectedRole);
  }
}
