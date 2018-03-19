import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { DashboardComponent } from './body/dashboard/dashboard.component';
import { LoginBodyComponent } from './login-body/login-body.component';
import { LoginComponent } from './login-body/login/login.component';
import { RegistrationComponent } from './login-body/registration/registration.component';
import { CreateQuestionComponent } from './body/create-question/create-question.component';
import { ShowQuestionComponent } from './body/show-question/show-question.component';
import { CreateAnswerComponent } from './body/create-answer/create-answer.component';

const routes: Routes = [
  {
    // localhost:8000/dashboard/
    path:'dashboard', component: BodyComponent, children: [
      { path:'', component: DashboardComponent },
      { path: 'new/Question', component: CreateQuestionComponent },
      { path: 'question/:id', component: ShowQuestionComponent },
      { path: 'new/Answer/:id', component: CreateAnswerComponent },
    ]
  },
  {
    // localhost:8000/
    path:'', component: LoginBodyComponent, children: [
      { path:'', component: RegistrationComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
