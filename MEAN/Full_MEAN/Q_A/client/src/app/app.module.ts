import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserService } from './user/user.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateQuestionComponent } from './create-question/create-question.component';
import { ShowQuestionComponent } from './show-question/show-question.component';
import { AllQuestionsComponent } from './all-questions/all-questions.component';
import { BodyComponent } from './body/body.component';
import { LoginBodyComponent } from './login-body/login-body.component';
import { LoginComponent } from './login-body/login/login.component';
import { RegistrationComponent } from './login-body/registration/registration.component';
import { SearchPipe } from './server/controllers/search.pipe';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DashboardComponent,
    CreateQuestionComponent,
    ShowQuestionComponent,
    AllQuestionsComponent,
    BodyComponent,
    LoginBodyComponent,
    LoginComponent,
    RegistrationComponent,
    SearchPipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
