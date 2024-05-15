import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { VisitFormComponent } from './visit-form/visit-form.component';
import { PatientHistoryComponent } from './patient-history/patient-history.component';
import { PatientHistoryFormComponent } from './patient-history-form/patient-history-form.component';
import { ScreeningTestStartComponent } from './screening-test-start/screening-test-start.component';

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
        component: VisitFormComponent
    },
    {
        path: 'patient-history',
        component: PatientHistoryFormComponent
    },
    {
        path: 'patient-history/:tajNumber',
        component: PatientHistoryComponent
    },
    {
        path: 'screening',
        component: ScreeningTestStartComponent
    }
    /*,
    {
        path: 'screening/needleFilter',
        component: ScreeningTestComponent
    },
    {
        path: 'screening/prostateExamination',
        component: ScreeningTestComponent
    },
    {
        path: 'screening/mammographicExamination',
        component: ScreeningTestComponent
    }
    */
];
