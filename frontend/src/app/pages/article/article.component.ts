import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/api/post/post.service';
import { Post } from '../../models/post';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent implements OnInit {
  isLoading: boolean = false
  posts: Post[] = []

  constructor(
    private postService: PostService
  ) {}

  async ngOnInit(): Promise<void> {
    await this.getArticles()
  }

  async getArticles() {
    this.isLoading = true
    await this.postService.getPosts()
      .then(response => {
        this.posts = response.data.posts
      })
      .catch(error => {
        console.log(error.response.data.message)
      })
      .finally(() => {
        this.isLoading = false
      })
  }
}
