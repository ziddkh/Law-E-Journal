import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EmptyPageModule } from '../../components/empty-page/empty-page.module';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: AboutUsComponent,
  },
  {
    path: ':slug/view',
    component: ProfileComponent,
  }
]

@NgModule({
  declarations: [
    AboutUsComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    EmptyPageModule,
    RouterModule.forChild(routes)
  ]
})
export class AboutUsModule { }
