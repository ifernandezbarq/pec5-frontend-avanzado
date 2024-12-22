import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-bird-card',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  template: `
    <mat-card (click)="navigateToDetail()">
      <mat-card-header>
        <mat-card-title>{{ bird.comName }}</mat-card-title>
        <mat-card-subtitle>{{ bird.sciName }}</mat-card-subtitle>
      </mat-card-header>
      <img mat-card-image *ngIf="bird.media?.[0]" [src]="bird.media[0].url" alt="{{ bird.comName }}" />
      <mat-card-content>
        <p><strong>Ubicación:</strong> {{ bird.locName }}</p>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    mat-card {
      cursor: pointer;
      margin: 10px;
      width: 300px;
    }
  `]
})
export class BirdCardComponent {
  @Input() bird!: any;

  navigateToDetail() {
    console.log('Navegar a detalle de:', this.bird.comName);
  }
}
