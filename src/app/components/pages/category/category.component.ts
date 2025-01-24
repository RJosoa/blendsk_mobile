import { Component } from '@angular/core';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CategoriesListComponent, RouterLink, RouterLinkActive],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
export class CategoryComponent {}
