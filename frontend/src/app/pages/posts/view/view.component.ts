import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { PostService } from '../../../services/api/post/post.service';
import { Post } from '../../../models/post';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss'
})
export class ViewComponent implements OnInit {
  isLoading: boolean = false
  activeSlug: string

  post!: Post
  recomendedPosts: Post[] = []

  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService,
    private saniziter: DomSanitizer,
    private router: Router,
  ) {
    this.activeSlug = this.activatedRoute.snapshot.params['slug']
  }

  ngOnInit(): void {
    this.getPost()
  }

  getPost() {
    this.isLoading = true
    this.postService.getPost(this.activeSlug)
      .then(response => {
        this.post = response.data.post
        this.recomendedPosts = response.data.recommended_post
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        this.isLoading = false
      })
  }

  viewPost(slug: string) {
    this.router.navigateByUrl(`/postingan/artikel/${slug}`)
  }

  getSafeContent(): SafeHtml {
    return this.saniziter.bypassSecurityTrustHtml(this.post.content)
  }
}
