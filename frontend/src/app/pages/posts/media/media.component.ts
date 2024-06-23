import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../../../services/api/post/post.service';
import { Post } from '../../../models/post';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrl: './media.component.scss'
})
export class MediaComponent {
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
    this.postService.getMedia(params)
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
