import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent
    },
    {
        path: 'userlist',
        component: UserListComponent
    },
    {
        path: 'add-user',
        component: UserFormComponent
    }
];
