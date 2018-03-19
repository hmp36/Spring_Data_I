import { BrowserModule} from '@angular/platform-browser';

import { NgModule , Component } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { PieChartComponent } from './shared/pie-chart/pie.chart.component';
import { HomeComponent } from './home/home.component';
import { NoContentComponent } from './no-content/no-content.component';
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpService } from './services/data/http.service';
import { UserService } from './services/data/user.service';
import { CookieService } from 'angular2-cookie/core';
import { ReformatStringService } from './services/reformat.string.service';
import { ArrayService } from './services/array.service';


// HOTFIX: deploy routing
// you must use non-hash location strategy
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
    declarations: [
        AppComponent,
        PieChartComponent,
        HomeComponent,
        NoContentComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule.forRoot(ROUTES)
    ],
    providers: [

        // HOTFIX: deploy routing
        // you must use non-hash location strategy
        {provide: LocationStrategy, useClass: HashLocationStrategy},

        // { provide: APP_BASE_HREF, useValue: '/' }, // instead of <base href="/">

        HttpService,
        UserService,
        ReformatStringService,
        ArrayService,
        CookieService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

