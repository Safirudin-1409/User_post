import { Injectable, NotFoundException } from "@nestjs/common";
import { CreatePostDto } from "./dto/create-post.dto";
import { UsersService } from "../user/users.service";

export interface Post {
  id: string;
  userId: string;
  title: string;
}

@Injectable()
export class PostsService {
  private posts: Post[] = [];

  constructor(private usersService: UsersService) {
  }
  createPost(createPostDto: CreatePostDto){
    const user : boolean = this.usersService.findById(createPostDto.userId);
    if (!user) {
      throw new NotFoundException("User not found, cannot create post");
    }
    const post: Post = {
      userId: createPostDto.userId,
      id : `post${Math.floor(Math.random() * 1000)}`,
      title: createPostDto.title,
    };

    this.posts.push(post);

    return post;
  }

  getAllPosts() {
    return this.posts;
  }
}
