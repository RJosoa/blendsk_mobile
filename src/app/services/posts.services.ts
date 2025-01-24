import { Injectable } from '@angular/core';
import axios from '../utils/axios-instance';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  getPosts() {
    return axios.get('/posts');
  }

  deletePost(postId: number) {
    return axios.delete(`/posts/${postId}`);
  }
}
