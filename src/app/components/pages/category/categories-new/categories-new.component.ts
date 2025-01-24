import { Component } from '@angular/core';
import { CategoriesService } from '../../../../services/categories.services';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-categories-new',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './categories-new.component.html',
  styleUrls: ['./categories-new.component.scss'],
})
export class CategoriesNewComponent {
  categoryName: string = '';
  constructor(
    private categoriesService: CategoriesService,
    private router: Router
  ) {}

  onSubmit() {
    if (!this.categoryName.trim()) {
      console.error('Category name is required');
      return;
    }

    this.createCategory(this.categoryName);
  }

  createCategory(name: string) {
    this.categoriesService
      .createCategory(name)
      .then((response) => {
        console.log('Category created:', response.data);
        this.router.navigate(['/category']);
      })
      .catch((error) => {
        console.error('Error creating category:', error);
      });
  }
}
