import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-patient-history-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './patient-history-form.component.html',
  styleUrl: './patient-history-form.component.css'
})
export class PatientHistoryFormComponent{

  formBuilder = inject(FormBuilder);

  historyForm = this.formBuilder.group<any>;

  showHistory(): void {
  }
}
