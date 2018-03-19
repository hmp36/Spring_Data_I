import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {NoContentComponent} from './no-content/no-content.component';


export let ROUTES: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },

    { path: '**', component: NoContentComponent }
];