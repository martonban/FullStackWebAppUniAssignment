import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { UserDTO } from '../../../models';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})

export class UserFormComponent implements OnInit {
  formBuilder = inject(FormBuilder);
  userService = inject(UserService);
  // Angular ROUTER KELL!!
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);

  userForm = this.formBuilder.group<UserDTO>({
    id: 0,
    firstName: '',
    lastName: '',
    birthDay: new Date(),
    tajNumber: 0,
  });

  isNewUser = true;

  // Check it is exist
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];

    if(id) {
      this.isNewUser = false;
      this.userService.getOne(id).subscribe({
        next: (user) => this.userForm.setValue(user),
        error : (err) => {
          // TODO: Notification
          console.log(err);
        }
      });
    }
  }

  saveUser() {
    const user = this.userForm.value as UserDTO;

    if(this.isNewUser) {
      this.userService.create(user).subscribe({
        next: () => {
          // TODO: notification
          this.router.navigateByUrl('/userlist');
        },
        error: (err) => {
          console.error(err);
        }
      });
    } else {
      this.userService.update(user).subscribe({
        next: () => {
          // TODO: notification
          this.router.navigateByUrl('/userlist');
        },
        error: (err) => {
          console.error(err);
        }
      });
    }
  }
}