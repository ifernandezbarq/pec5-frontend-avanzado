import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImagesService } from '../../services/images.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-detail.component.html'
})
export class ImageDetailComponent {
  image: any;

  constructor(private route: ActivatedRoute, private imagesService: ImagesService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.imagesService.getImageById(id!).subscribe(data => {
      this.image = data;
    });
  }
}
