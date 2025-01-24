import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { environment } from '../../../../environments/environment.development';
import { PostListComponent } from "./post-list/post-list.component";

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [PostListComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent {
//   posts: any[] = [];
//   ngOnInit(): void {
//     const url = `${environment.apiURL}/posts`;
//     axios
//       .get(url)
//       .then((response) => {
//         this.posts = response.data;
//         console.log('Tableau de posts :', this.posts);
//       })
//       .catch((error) => {
//         console.error('Erreur de connexion :', error);
//       });
//   }


}
