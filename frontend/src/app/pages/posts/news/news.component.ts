import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../../../models/post';
import { PostService } from '../../../services/api/post/post.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent {
  isLoading: boolean = false

  currentPage: number = 1
  totalPage: number = 1
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
    this.postService.getNews(params)
      .then(response => {
        this.posts = response.data.posts.data
        this.currentPage = response.data.posts.current_page
        this.totalPage = response.data.posts.last_page
        this.recomendedPosts = response.data.recommended_posts
      })
      .catch(error => {
        console.log(error.response.data.message)
      })
      .finally(() => {
        this.isLoading = false
      })
  }

  onPageChange(page: number) {
    this.getPosts({ page })
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
    this.router.navigateByUrl(`/postingan/artikel/${slug}`)
  }
}
