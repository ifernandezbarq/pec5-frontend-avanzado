import { Component, OnInit } from '@angular/core';
import { EbirdService } from '../ebird.service';
import { Router } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BirdCardComponent } from '../components/bird-card/bird-card.component';
import { BirdGridComponent } from '../components/bird-grid/bird-grid.component';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-bird-list',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule, BirdCardComponent, BirdGridComponent, MatButtonModule],
  template: `
    <div class="actions">
      <button mat-button color="primary" (click)="setView('cards')"
        [class.active]="viewMode === 'cards'">Cards View</button>
      <button mat-button color="accent" (click)="setView('grid')"
        [class.active]="viewMode === 'grid'">Grid View</button>
    </div>

    <div *ngIf="loading" class="spinner">
      <mat-spinner></mat-spinner>
    </div>

    <div *ngIf="!loading" @listAnimation>
      <ng-container *ngIf="viewMode === 'cards'">
        <app-bird-card [bird]="bird" *ngFor="let bird of birds" (click)="goToDetail(bird.speciesCode)"></app-bird-card>
      </ng-container>
      <ng-container *ngIf="viewMode === 'grid'">
        <app-bird-grid [birds]="birds"></app-bird-grid>
      </ng-container>
    </div>
  `,
  styles: [`
    .actions {
      display: flex;
      justify-content: end;
      gap: 10px;
      margin: 20px;
    }
    .spinner {
      display: flex;
      justify-content: center;
      margin-top: 50px;
    }
    .active {
      font-weight: bold;
    }
  `],
  animations: [
    trigger('listAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class BirdListComponent implements OnInit {
  birds: any[] = [];
  loading = true;
  viewMode: 'cards' | 'grid' = 'cards';

  constructor(
    private ebirdService: EbirdService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.ebirdService.getBirds().subscribe(
      data => {
        this.birds = data;
        this.loading = false;
      },
      error => {
        console.error('Error al cargar las aves', error);
        this.loading = false;
      }
    );
  }

  setView(mode: 'cards' | 'grid') {
    this.viewMode = mode;
  }

  goToDetail(birdId: string) {
    this.router.navigate(['/bird', birdId]);
  }
}
