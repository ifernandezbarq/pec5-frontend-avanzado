import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-bird-grid',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule],
  template: `
    <table mat-table [dataSource]="birds" class="mat-elevation-z8">
      <ng-container matColumnDef="name">
        <th mat-header-cell *matHeaderCellDef> Nombre </th>
        <td mat-cell *matCellDef="let bird">{{ bird.comName }}</td>
      </ng-container>

      <ng-container matColumnDef="sciName">
        <th mat-header-cell *matHeaderCellDef> Nombre Científico </th>
        <td mat-cell *matCellDef="let bird">{{ bird.sciName }}</td>
      </ng-container>

      <ng-container matColumnDef="actions">
        <th mat-header-cell *matHeaderCellDef> Acción </th>
        <td mat-cell *matCellDef="let bird">
          <button mat-button (click)="navigateToDetail(bird)">Ver Detalle</button>
        </td>
      </ng-container>

      <tr mat-header-row *matHeaderRowDef="['name', 'sciName', 'actions']"></tr>
      <tr mat-row *matRowDef="let row; columns: ['name', 'sciName', 'actions'];"></tr>
    </table>
  `,
  styles: [`
    table {
      width: 100%;
      margin: 10px 0;
    }
  `]
})
export class BirdGridComponent {
  @Input() birds!: any[];

  constructor(private router: Router) {}

  navigateToDetail(bird: any) {
    this.router.navigate(['/bird', bird.speciesCode]);
  }
}
