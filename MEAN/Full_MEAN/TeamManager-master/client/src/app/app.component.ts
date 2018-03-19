import { Component, OnInit } from '@angular/core';
import { ReformatStringService } from './services/reformat.string.service';
import { TEST_CONST__MAX } from './shared/constants';
import { User } from './models/user.model';
import { UserService } from './services/data/user.service';
import { CookieService } from 'angular2-cookie/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import * as _ from 'lodash';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [
        './app.component.css',
        './global.styles.css'
    ]
})
export class AppComponent implements OnInit {
    public title = 'app';
    public users: User[] = [];
    public sub: Subscription;

    constructor(
        private _userService: UserService,
        private _cookieService: CookieService,
        private _router: Router,
        public reformatStringService: ReformatStringService
    ) {}

    public ngOnInit() {
        this.getAllUsers();

        /* fix width troubles - start */
            // резались карточки со стримами на Iphone 5 (w: 320px)
            let appRoot = document.querySelector('app-root');
            appRoot['style']['width'] = '100%';
            appRoot['style']['display'] = 'block';
        /* fix width troubles - end */
    }

    public isAdmin(): boolean {
        // return new RegExp(/admin/).test(window.location.href);
        return !!this._cookieService.getObject('admin') && new RegExp(/admin/).test(window.location.href);
    }

    public getAllUsers() {
        this._userService.getAllUsers()
            .then((casinos) => {
                this.users = JSON.parse( JSON.stringify(casinos) );

                // debug
                    // console.log(' \n users \n ', users);
                    // console.log(' \n this.users \n ', this.users);
                // end - debug
            })
            .catch((error) => {
                console.log(error);
            })
    }

}
