import { Routes } from '@angular/router';

import { LoginComponent } from './components/pages/login/login.component';
import { HomeComponent } from './components/pages/home/home.component';
import { CommentsComponent } from './components/pages/comments/comments.component';
import { PostComponent } from './components/pages/post/post.component';
import { CategoryComponent } from './components/pages/category/category.component';
import { UserComponent } from './components/pages/user/user.component';
import { CategoriesNewComponent } from './components/pages/category/categories-new/categories-new.component';
import { CategoriesEditComponent } from './components/pages/category/categories-edit/categories-edit.component';
import { UsersRolesUpdateComponent } from './components/pages/user/users-roles-update/users-roles-update.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, title: 'Login' },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Blendsk',
    canActivate: [AuthGuard],
  },
  {
    path: 'comments',
    component: CommentsComponent,
    title: 'Comments',
    canActivate: [AuthGuard],
  },
  {
    path: 'post',
    component: PostComponent,
    title: 'Post',
    canActivate: [AuthGuard],
  },
  {
    path: 'category',
    component: CategoryComponent,
    title: 'Category',
    canActivate: [AuthGuard],
  },
  {
    path: 'category/new',
    component: CategoriesNewComponent,
    title: 'New Category',
    canActivate: [AuthGuard],
  },
  {
    path: 'category/:id/edit',
    component: CategoriesEditComponent,
    title: 'Edit Category',
    canActivate: [AuthGuard],
  },
  {
    path: 'user',
    component: UserComponent,
    title: 'User',
    canActivate: [AuthGuard],
  },
  {
    path: 'user/:id/edit',
    component: UsersRolesUpdateComponent,
    title: 'User',
    canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: 'home' },
];
