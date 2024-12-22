import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EbirdService } from '../../ebird.service';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bird-detail',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, MatButtonModule],
  template: `
    <div class="detail-header">
      <h1>{{ bird?.comName }}</h1>
      <button mat-button color="warn" (click)="goBack()">Back</button>
    </div>
    <img *ngIf="bird?.media && bird?.media[0]" [src]="bird.media[0].url" alt="{{ bird.comName }}" class="bird-image">
    <button mat-raised-button color="primary" (click)="toggleDetails()">Show All Details</button>

    <mat-accordion *ngIf="showDetails">
      <mat-expansion-panel>
        <mat-expansion-panel-header>
          <span>Scientific Name</span>
        </mat-expansion-panel-header>
        <p>{{ bird?.sciName }}</p>
      </mat-expansion-panel>
      <mat-expansion-panel>
        <mat-expansion-panel-header>
          <span>Location</span>
        </mat-expansion-panel-header>
        <p>{{ bird?.locName }}</p>
      </mat-expansion-panel>
    </mat-accordion>
  `,
  styles: [`
    .detail-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 20px;
    }
    .bird-image {
      width: 100%;
      max-height: 400px;
      object-fit: cover;
    }
  `]
})
export class BirdDetailComponent implements OnInit {
  bird: any;
  showDetails = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ebirdService: EbirdService
  ) {}

  ngOnInit(): void {
    const speciesCode = this.route.snapshot.paramMap.get('id');
    if (speciesCode) {
      this.ebirdService.getBirdById(speciesCode).subscribe(
        data => {
          this.bird = data;
        },
        error => console.error('Error al cargar el detalle', error)
      );
    }
  }

  goBack() {
    this.router.navigate(['/']);
  }

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }
}
