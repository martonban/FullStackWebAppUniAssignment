import { Component, inject, OnInit } from '@angular/core';
import { VisitService } from '../services/visit.service';
import { ActivatedRoute, Router } from '@angular/router';
import { VisitDTO } from '../../../models';

@Component({
  selector: 'app-patient-history',
  standalone: true,
  imports: [],
  templateUrl: './patient-history.component.html',
  styleUrl: './patient-history.component.css'
})
export class PatientHistoryComponent {

  visitService = inject(VisitService);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);

  visits: VisitDTO[] = [];

  ngOnInit(): void {
    const tajNumber = this.activatedRoute.snapshot.params['tajNumber'];
    this.visitService.visitOfUser(tajNumber).subscribe({
      next: visits => this.visits = visits,
      error: err => console.error(err) 
    });
  }
}
