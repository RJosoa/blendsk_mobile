import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsService } from '../../../../services/comments.services';
import { Comment } from '../../../../models/comment.model';

@Component({
  selector: 'app-comments-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comments-list.component.html',
  styleUrl: './comments-list.component.scss',
})
export class CommentsListComponent implements OnInit {
  comments: Comment[] = [];

  constructor(private commentsService: CommentsService) {}

  ngOnInit() {
    this.commentsService
      .getComments()
      .then((response) => {
        this.comments = response.data;
      })
      .catch((error) => {
        console.error('Error retrieving comments', error);
      });
  }

  async deleteComment(commentId: number) {
    try {
      await this.commentsService.deleteComment(commentId);
      this.comments = this.comments.filter(
        (comment) => comment.id !== commentId
      );
    } catch (error) {
      console.error('Error deleting comment', error);
    }
  }
}
