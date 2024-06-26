import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { PostService } from '../../../services/api/post/post.service';
import { Post } from '../../../models/post';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss'
})
export class ViewComponent implements OnInit {
  isLoading: boolean = false
  activeSlug: string
  baseUrl: string = environment.base_url

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

  getFacebookShareLink(): string {
    const description = `Terdapat Artikel Menarik dari SSP Advocaten ${this.post.title} Silahkan kunjungi link berikut ${this.baseUrl}/${this.post.type.toLowerCase()}/${this.post.slug}`;
    return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(this.baseUrl)}&quote=${encodeURIComponent(description)}`;
  }

  getTelegramShareLink(): string {
    const message = `Terdapat Artikel Menarik dari SSP Advocaten ${this.post.title} Silahkan kunjungi link berikut ${this.baseUrl}/${this.post.type.toLowerCase()}/${this.post.slug}`;
    return `https://t.me/share/url?url=${encodeURIComponent(this.baseUrl)}&text=${encodeURIComponent(message)}`;
  }

  getTwitterShareLink(): string {
    const message = `Terdapat Artikel Menarik dari SSP Advocaten ${this.post.title} Silahkan kunjungi link berikut ${this.baseUrl}/${this.post.type.toLowerCase()}/${this.post.slug}`;
    return `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`;
  }

  getWhatsAppShareLink(): string {
    const message = `Terdapat Artikel Menarik dari SSP Advocaten ${this.post.title} Silahkan kunjungi link berikut ${this.baseUrl}/${this.post.type.toLowerCase()}/${this.post.slug}`;
    return `https://api.whatsapp.com/send/?text=${encodeURIComponent(message)}`;
  }
}
