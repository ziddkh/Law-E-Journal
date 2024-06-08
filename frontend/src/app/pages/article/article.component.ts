import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/api/post/post.service';
import { Post } from '../../models/post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent implements OnInit {
  isLoading: boolean = false

  posts: Post[] = []
  recomendedPosts: Post[] = []

  search: string = ''
  searchTimeout: any

  constructor(
    private router: Router,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.getPosts()
  }

  getPosts(params: any = {}) {
    this.isLoading = true
    this.postService.getPosts({ type: 'Article', ...params })
      .then(response => {
        this.posts = response.data.posts.data
        this.recomendedPosts = response.data.recommended_posts
      })
      .catch(error => {
        console.log(error.response.data.message)
      })
      .finally(() => {
        this.isLoading = false
      })
  }

  searchPosts() {
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout)
    }

    this.searchTimeout = setTimeout(() => {
      this.getPosts({ title: this.search })
    }, 500)
  }

  viewPost(slug: string) {
    this.router.navigateByUrl(`/artikel/${slug}`)
  }
}
