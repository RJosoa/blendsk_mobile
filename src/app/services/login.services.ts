import { Injectable } from '@angular/core';
import axios from '../utils/axios-instance';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  login(username: string, password: string) {
    return axios.post('/login', { username, password });
  }
}
