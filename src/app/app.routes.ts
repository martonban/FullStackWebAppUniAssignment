import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { VisitStartComponent } from './visit-start/visit-start.component';
import { VisitFormComponent } from './visit-form/visit-form.component';

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
    },
    {
        path: 'edit-user/:id',
        component: UserFormComponent
    },
    {
        path: 'visit',
        component: VisitStartComponent
    },
    {
        path: 'visit/:tajNumber',
        component: VisitFormComponent
    }
];
