import { Injectable } from '@angular/core';
import axios from '../utils/axios-instance';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  getUsers() {
    return axios.get('/users');
  }

  getUserById(id: number) {
    return axios.get(`/users/${id}`);
  }

  updateUserRoles(userId: number, roles: { roles: string[] }) {
    return axios.put(`/users/${userId}/roles`, roles);
  }


  deleteUser(userId: number) {
    return axios.delete(`/users/${userId}`);
  }
}
