import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsListComponent } from "./comments-list/comments-list.component";

@Component({
  selector: 'app-comment-list',
  standalone: true,
  imports: [CommonModule, CommentsListComponent],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss',
})
export class CommentsComponent {}
