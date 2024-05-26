import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { catchError, finalize, of } from 'rxjs';
import { SalicService } from 'src/app/services/salic.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) title!: string;
  @Input({ required: true }) email!: string;
  isLoading = true;
  image$ = this.salicService.getPhoto(this.email).pipe(
    finalize(() => {
      this.isLoading = false;
    })
  );

  constructor(private salicService: SalicService) {}
}
