import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../../../services/categories.services';

@Component({
  selector: 'app-categories-list',
  standalone: true,
  imports: [],
  templateUrl: './categories-list.component.html',
  styleUrl: './categories-list.component.scss',
})
export class CategoriesListComponent implements OnInit {
  categories: any[] = [];

  constructor(private categoriesService: CategoriesService) {}
  ngOnInit(): void {
    this.categoriesService
      .getCategories()
      .then((response) => {
        this.categories = response.data;
        console.log('Tableau des catégories :', this.categories);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des catégories', error);
      });
  }
}
