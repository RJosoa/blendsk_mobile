import { Injectable } from '@angular/core';
import axios from '../utils/axios-instance';
import { Comment } from '../models/comment.model';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  getComments() {
    return axios.get<Comment[]>('/comments');
  }

  deleteComment(commentId: number) {
    return axios.delete(`/comments/${commentId}`);
  }
}
