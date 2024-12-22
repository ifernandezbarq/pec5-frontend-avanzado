import { Component } from '@angular/core';
import { ImagesService } from '../../services/images.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-images',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './images.component.html'
})
export class ImagesComponent {
  images: any[] = [];

  constructor(private imagesService: ImagesService, private router: Router) {}

  ngOnInit(): void {
    this.imagesService.getImages().subscribe(data => {
      this.images = data;
    });
  }

  navigateToDetail(id: string): void {
    this.router.navigate(['/image', id]);
  }
}
