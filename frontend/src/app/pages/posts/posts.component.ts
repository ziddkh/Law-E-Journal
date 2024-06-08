import { Component } from '@angular/core';
import { Post } from '../../models/post';
import { Router } from '@angular/router';
import { PostService } from '../../services/api/post/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {
  isLoading: boolean = false

  posts: Post[] = []
  recomendedPosts: Post[] = []
  recommendedPost!: Post

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
    this.postService.getPosts({ ...params })
      .then(response => {
        this.posts = response.data.posts.data
        this.recomendedPosts = response.data.recommended_posts
        this.recommendedPost = response.data.recommended_posts[0]
        this.recomendedPosts.shift()
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
