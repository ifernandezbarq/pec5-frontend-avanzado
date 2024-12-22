import { Routes } from '@angular/router';
import { BirdListComponent } from './bird-list/bird-list.component';
import { BirdDetailComponent } from './components/bird-detail/bird-detail.component';
import { ImagesComponent } from './components/images/images.component';
import { ImageDetailComponent } from './components/image-detail/image-detail.component';

export const routes: Routes = [
  { path: '', component: BirdListComponent },
  { path: 'bird/:id', component: BirdDetailComponent },
  { path: 'images', component: ImagesComponent },
  { path: 'image/:id', component: ImageDetailComponent },
  { path: '**', redirectTo: '' }
];
