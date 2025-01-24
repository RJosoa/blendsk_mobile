import { Injectable } from '@angular/core';
import axios from '../utils/axios-instance';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  getCategories() {
    return axios.get('/categories');
  }

  getCategoryById(id: number) {
    return axios.get(`/categories/${id}`);
  }

  createCategory(name: string) {
    return axios.post('/categories', { name });
  }

  updateCategory(categoryId: number, name: string) {
    return axios.put(`/categories/${categoryId}`, { name });
  }
}
