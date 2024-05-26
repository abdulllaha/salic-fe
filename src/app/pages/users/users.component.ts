import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { SalicService } from 'src/app/services/salic.service';
import { finalize, map } from 'rxjs';
import { CardComponent } from 'src/app/components/card/card.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  isUserLoading = true;
  dropdownOpen = false;
  selectText = 'Select User';
  users$ = this.salicService.getUsers().pipe(
    map(({ value }) => value),
    finalize(() => {
      this.isUserLoading = false;
    })
  )
  constructor(private http: HttpClient, private salicService: SalicService) {}
  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }
}
