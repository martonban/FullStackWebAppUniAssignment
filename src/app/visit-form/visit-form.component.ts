import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { VisitDTO, UserDTO } from '../../../models';
import { UserService } from '../services/user.service';
import { VisitService } from '../services/visit.service';

@Component({
  selector: 'app-visit-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './visit-form.component.html',
  styleUrl: './visit-form.component.css'
})

export class VisitFormComponent implements OnInit {
  formBuilder = inject(FormBuilder);

  userService = inject(UserService);

  visitService = inject(VisitService)

  users: UserDTO[] = [];



  visitForm = this.formBuilder.group<VisitDTO>({
    id: 0,
    patient: null,
    diagnosis: '',
    medicine: '',
    results: '',
  });

  ngOnInit(): void {
    this.userService.getAll().subscribe(users => this.users = users)
  }

  createVisit() {
    const visit = this.visitForm.value as VisitDTO;

    console.log('IN', visit);

    this.visitService.create(visit).subscribe(visitAded => {
      console.log('OUT', visitAded);
    });
  }
}
