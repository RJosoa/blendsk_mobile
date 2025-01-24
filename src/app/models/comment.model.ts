// src/app/models/comment.model.ts
export interface Comment {
    id: number;
    content: string;
    createdAt: Date;
    post: {
      id: number;
      title: string;
    };
    user: {
      id: number;
      username: string;
    };
  }
