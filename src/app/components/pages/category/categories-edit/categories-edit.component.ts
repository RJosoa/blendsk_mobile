import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Pour obtenir l'ID depuis l'URL
import { FormsModule } from '@angular/forms';
import { CategoriesService } from '../../../../services/categories.services';

@Component({
  selector: 'app-categories-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './categories-edit.component.html',
  styleUrls: ['./categories-edit.component.scss'],
})
export class CategoriesEditComponent implements OnInit {
  categoryEditName: string = '';

  constructor(
    private categoryService: CategoriesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.getCategoryById(id);
  }

  getCategoryById(id: number) {
    this.categoryService
      .getCategoryById(id)
      .then((response) => {
        const category = response.data;
        this.categoryEditName = category.name;
      })
      .catch((error) => {
        console.error('Error fetching category by ID:', error);
      });
  }

  onSubmit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.categoryService
      .updateCategory(id, this.categoryEditName)
      .then(() => {
        this.router.navigate(['/category']);
        console.log('Category updated successfully');
      })
      .catch((error) => {
        console.error('Error updating category:', error);
      });
  }
}
