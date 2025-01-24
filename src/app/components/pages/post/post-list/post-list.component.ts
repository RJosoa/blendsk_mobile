import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../../../services/posts.services';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss',
})
export class PostListComponent implements OnInit {
  postList: any[] = [];
  constructor(private postService: PostsService) {}
  ngOnInit(): void {
    this.postService
      .getPosts()
      .then((response) => {
        this.postList = response.data;
        console.log('Post List :', this.postList);
      })
      .catch((error) => {});
  }
  deletePost(postId: number) {
    this.postService.deletePost(postId).then(() => {
      this.postList = this.postList.filter((post) => post.id!== postId);
      console.log('Post deleted successfully');
    }).catch((error) => console.error('Error deleting post:', error));
  }
}
