import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { AllQuestionsComponent } from './all-questions/all-questions.component';

const routes: Routes = [
    { path: 'register', component: UserComponent },
    { path: 'dashboard', component: DashboardComponent },
    // { path: 'all', component: AllQuestionComponent },
    { path: '', pathMatch: 'full', redirectTo: '/register' },
    { path: '**', redirectTo: '/register' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
