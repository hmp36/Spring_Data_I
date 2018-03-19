webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var body_component_1 = __webpack_require__("../../../../../src/app/body/body.component.ts");
var dashboard_component_1 = __webpack_require__("../../../../../src/app/body/dashboard/dashboard.component.ts");
var login_body_component_1 = __webpack_require__("../../../../../src/app/login-body/login-body.component.ts");
var registration_component_1 = __webpack_require__("../../../../../src/app/login-body/registration/registration.component.ts");
var create_question_component_1 = __webpack_require__("../../../../../src/app/body/create-question/create-question.component.ts");
var show_question_component_1 = __webpack_require__("../../../../../src/app/body/show-question/show-question.component.ts");
var create_answer_component_1 = __webpack_require__("../../../../../src/app/body/create-answer/create-answer.component.ts");
var routes = [
    {
        // localhost:8000/dashboard/
        path: 'dashboard', component: body_component_1.BodyComponent, children: [
            { path: '', component: dashboard_component_1.DashboardComponent },
            { path: 'new/Question', component: create_question_component_1.CreateQuestionComponent },
            { path: 'question/:id', component: show_question_component_1.ShowQuestionComponent },
            { path: 'new/Answer/:id', component: create_answer_component_1.CreateAnswerComponent },
        ]
    },
    {
        // localhost:8000/
        path: '', component: login_body_component_1.LoginBodyComponent, children: [
            { path: '', component: registration_component_1.RegistrationComponent }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Login And Registration';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var app_routing_module_1 = __webpack_require__("../../../../../src/app/app-routing.module.ts");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var login_body_component_1 = __webpack_require__("../../../../../src/app/login-body/login-body.component.ts");
var login_component_1 = __webpack_require__("../../../../../src/app/login-body/login/login.component.ts");
var registration_component_1 = __webpack_require__("../../../../../src/app/login-body/registration/registration.component.ts");
var user_service_1 = __webpack_require__("../../../../../src/app/server/controllers/user.service.ts");
var body_component_1 = __webpack_require__("../../../../../src/app/body/body.component.ts");
var dashboard_component_1 = __webpack_require__("../../../../../src/app/body/dashboard/dashboard.component.ts");
var question_service_1 = __webpack_require__("../../../../../src/app/server/controllers/question.service.ts");
var answer_service_1 = __webpack_require__("../../../../../src/app/server/controllers/answer.service.ts");
var create_question_component_1 = __webpack_require__("../../../../../src/app/body/create-question/create-question.component.ts");
var show_question_component_1 = __webpack_require__("../../../../../src/app/body/show-question/show-question.component.ts");
var create_answer_component_1 = __webpack_require__("../../../../../src/app/body/create-answer/create-answer.component.ts");
var search_q_pipe_1 = __webpack_require__("../../../../../src/app/server/controllers/search-q.pipe.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                login_body_component_1.LoginBodyComponent,
                login_component_1.LoginComponent,
                registration_component_1.RegistrationComponent,
                body_component_1.BodyComponent,
                dashboard_component_1.DashboardComponent,
                create_question_component_1.CreateQuestionComponent,
                show_question_component_1.ShowQuestionComponent,
                create_answer_component_1.CreateAnswerComponent,
                search_q_pipe_1.SearchQPipe
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                http_1.HttpModule
            ],
            providers: [
                user_service_1.UserService,
                question_service_1.QuestionService,
                answer_service_1.AnswerService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/body/body.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/body/body.component.html":
/***/ (function(module, exports) {

module.exports = "<a href (click)=\"logout()\">Logout</a>\n<br>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/body/body.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var user_service_1 = __webpack_require__("../../../../../src/app/server/controllers/user.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var BodyComponent = /** @class */ (function () {
    function BodyComponent(_http, _router, _userService) {
        this._http = _http;
        this._router = _router;
        this._userService = _userService;
        this.currentUser = null;
    }
    BodyComponent.prototype.ngOnInit = function () {
        this.getUserSession();
    };
    BodyComponent.prototype.getUserSession = function () {
        var _this = this;
        this._userService.getCurrentUser().subscribe(function (res) {
            _this.currentUser = res.json();
            if (_this.currentUser == null) {
                _this._router.navigateByUrl('/');
            }
        });
    };
    BodyComponent.prototype.logout = function () {
        var _this = this;
        this._userService.logout().subscribe(function (res) {
            _this.currentUser = null;
        });
    };
    BodyComponent = __decorate([
        core_1.Component({
            selector: 'app-body',
            template: __webpack_require__("../../../../../src/app/body/body.component.html"),
            styles: [__webpack_require__("../../../../../src/app/body/body.component.css")]
        }),
        __metadata("design:paramtypes", [http_1.Http,
            router_1.Router,
            user_service_1.UserService])
    ], BodyComponent);
    return BodyComponent;
}());
exports.BodyComponent = BodyComponent;


/***/ }),

/***/ "../../../../../src/app/body/create-answer/create-answer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/body/create-answer/create-answer.component.html":
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/dashboard']\">Home</a> |\n<a [routerLink]=\"['/dashboard/question', question._id]\">Back to Question</a>\n\n<h2>{{question.question}}</h2>\n<p>{{question.description}}</p>\n<fieldset>\n  <legend>New Answer</legend>\n  <form (submit)=\"createAnswer()\">\n\n    <label>Answer:</label><br>\n    <div *ngIf=\"answer.invalid && (answer.dirty || answer.touched)\">\n      <p *ngIf=\"answer.errors.required\" style=\"color: red;\">Answer is required</p>\n      <p *ngIf=\"answer.errors.minlength && !answer.errors.required\" style=\"color: red;\">Answers must me at least 5 characters</p>\n    </div>\n    <textarea name=\"answer\" required minlength=\"5\" [(ngModel)]=\"newAnswer.answer\" #answer=\"ngModel\" cols=\"30\" rows=\"3\"></textarea><br>\n  \n    <label>Supporting details for your answer:<small>(optional)</small></label><br>\n    <textarea name=\"detail\" cols=\"30\" rows=\"3\" [(ngModel)]=\"newAnswer.detail\"></textarea>\n    <br>\n    <button href [routerLink]=\"['/dashboard']\">cancel</button>\n    <input type=\"submit\" value=\"Submit\">\n  </form>\n</fieldset>"

/***/ }),

/***/ "../../../../../src/app/body/create-answer/create-answer.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var answer_1 = __webpack_require__("../../../../../src/app/server/models/answer.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var router_2 = __webpack_require__("../../../router/esm5/router.js");
var answer_service_1 = __webpack_require__("../../../../../src/app/server/controllers/answer.service.ts");
var question_service_1 = __webpack_require__("../../../../../src/app/server/controllers/question.service.ts");
var question_1 = __webpack_require__("../../../../../src/app/server/models/question.ts");
var CreateAnswerComponent = /** @class */ (function () {
    function CreateAnswerComponent(_router, _route, _answerService, _questionService) {
        this._router = _router;
        this._route = _route;
        this._answerService = _answerService;
        this._questionService = _questionService;
        this.newAnswer = new answer_1.Answer;
        this.question = new question_1.Question;
    }
    CreateAnswerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) { return _this.question_id = params.id; });
        this.getQuestion;
        this.getQuestion();
    };
    CreateAnswerComponent.prototype.getQuestion = function () {
        var _this = this;
        console.log(this.question_id);
        this._questionService.getOneQuestion(this.question_id).subscribe(function (res) {
            _this.question = res.json();
        });
    };
    CreateAnswerComponent.prototype.createAnswer = function () {
        var _this = this;
        this._answerService.createAnswer(this.question_id, this.newAnswer).subscribe(function (res) {
            console.log(res.json());
            _this._router.navigateByUrl('/dashboard');
        });
    };
    CreateAnswerComponent = __decorate([
        core_1.Component({
            selector: 'app-create-answer',
            template: __webpack_require__("../../../../../src/app/body/create-answer/create-answer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/body/create-answer/create-answer.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_2.ActivatedRoute,
            answer_service_1.AnswerService,
            question_service_1.QuestionService])
    ], CreateAnswerComponent);
    return CreateAnswerComponent;
}());
exports.CreateAnswerComponent = CreateAnswerComponent;


/***/ }),

/***/ "../../../../../src/app/body/create-question/create-question.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/body/create-question/create-question.component.html":
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/dashboard']\">Home</a> \n\n<fieldset>\n  <legend>New Question</legend>\n  <form (submit)=\"createQuestion()\">\n\n    <label>Question:</label><br>\n    <div *ngIf=\"question.invalid && (question.dirty || question.touched)\">\n      <p *ngIf=\"question.errors.required\" style=\"color: red;\">Question is required</p>\n      <p *ngIf=\"question.errors.minlength && !question.errors.required\" style=\"color: red;\">question must me at least 10 characters</p>\n    </div>\n    <textarea name=\"question\" required minlength=\"10\" cols=\"30\" rows=\"3\" [(ngModel)]=\"newQuestion.question\" #question=\"ngModel\"></textarea><br>\n    \n    <label>Description:<small>(optional)</small></label><br>\n    <textarea name=\"description\" cols=\"30\" rows=\"3\" [(ngModel)]=\"newQuestion.description\"></textarea><br>\n    <br>\n    <button href [routerLink]=\"['/dashboard']\">cancel</button>\n\n    <input type=\"submit\" value=\"Post Question\">\n    \n  </form>\n</fieldset>"

/***/ }),

/***/ "../../../../../src/app/body/create-question/create-question.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var question_1 = __webpack_require__("../../../../../src/app/server/models/question.ts");
var question_service_1 = __webpack_require__("../../../../../src/app/server/controllers/question.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var CreateQuestionComponent = /** @class */ (function () {
    function CreateQuestionComponent(_router, _quetionService) {
        this._router = _router;
        this._quetionService = _quetionService;
        this.newQuestion = new question_1.Question;
    }
    CreateQuestionComponent.prototype.ngOnInit = function () {
    };
    CreateQuestionComponent.prototype.createQuestion = function () {
        var _this = this;
        this._quetionService.createQuestion(this.newQuestion).subscribe(function (res) {
            console.log(res.json());
            _this._router.navigateByUrl('/dashboard');
        });
    };
    CreateQuestionComponent = __decorate([
        core_1.Component({
            selector: 'app-create-question',
            template: __webpack_require__("../../../../../src/app/body/create-question/create-question.component.html"),
            styles: [__webpack_require__("../../../../../src/app/body/create-question/create-question.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            question_service_1.QuestionService])
    ], CreateQuestionComponent);
    return CreateQuestionComponent;
}());
exports.CreateQuestionComponent = CreateQuestionComponent;


/***/ }),

/***/ "../../../../../src/app/body/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/body/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "\n<a [routerLink]=\"['new/Question']\">Add a Question</a>\n\n<div>\n    <br>\n    <label>Search:</label>\n    <input [(ngModel)]=\"searchText\">\n</div><br>\n\n<table>\n    <tr>\n        <th>Question</th>\n        <th>Answers</th>\n        <th>Action</th>\n    </tr>\n    \n    <tr *ngFor=\"let question of questions | filter : searchText\">\n        <td>{{question.question}}</td>\n        <td>{{question._answer.length}}</td>\n        <td><a href [routerLink]=\"['/dashboard/question', question._id]\">Show</a>  <a href [routerLink]=\"['/dashboard/new/Answer', question._id]\">Answer</a></td>\n    </tr>\n\n</table>"

/***/ }),

/***/ "../../../../../src/app/body/dashboard/dashboard.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var user_service_1 = __webpack_require__("../../../../../src/app/server/controllers/user.service.ts");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var question_service_1 = __webpack_require__("../../../../../src/app/server/controllers/question.service.ts");
var answer_service_1 = __webpack_require__("../../../../../src/app/server/controllers/answer.service.ts");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(_http, _router, _userService, _questionService, _answerService) {
        this._http = _http;
        this._router = _router;
        this._userService = _userService;
        this._questionService = _questionService;
        this._answerService = _answerService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.allQuestions();
    };
    DashboardComponent.prototype.allQuestions = function () {
        var _this = this;
        console.log(this._userService);
        this._questionService.getQuestions().subscribe(function (res) {
            _this.questions = res.json();
        });
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/body/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/body/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [http_1.Http,
            router_1.Router,
            user_service_1.UserService,
            question_service_1.QuestionService,
            answer_service_1.AnswerService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;


/***/ }),

/***/ "../../../../../src/app/body/show-question/show-question.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* *{\n    outline: solid black 1px;\n} */\n.card{\n    border: 1px solid rgb(158, 155, 155);\n    margin-bottom: 5px;\n}\n.name{\n    margin-top: 5px;\n    margin-bottom: -4px;\n}\n.answer{\n    margin-left: 10px;\n    margin-top: 2;\n    display: inline-block;\n    width: 85%;\n}\n.answer h4 {\n    margin-top: -4px;\n    margin-bottom: -5px;\n}\n.answer p {\n    margin-top: -3px;\n}\n.like{\n    width: 10%;\n    display: inline-block;\n    text-align: center;\n    vertical-align: top;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/body/show-question/show-question.component.html":
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/dashboard']\">Home</a> |\n<a [routerLink]=\"['/dashboard/new/Answer', question._id]\">Answer this Question</a>\n\n\n<h2>{{question.question}}</h2>\n<p>{{question.description}}</p>\n<hr>\n\n  <div class=\"card\" *ngFor=\"let answer of answers\">\n    <div class=\"answer\">\n        <small class=\"name\">{{ answer._user.first_name }}:</small><br>\n        <h4>{{answer.answer}}</h4>\n        <p><small>{{ answer.detail }}</small> </p>\n    </div>\n    <div class=\"like\">\n      <p>{{ answer.likes }} likes <button (click)='likeAnswer(answer._id)'>Like!</button></p>\n      \n    </div>\n    \n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/body/show-question/show-question.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var question_1 = __webpack_require__("../../../../../src/app/server/models/question.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var question_service_1 = __webpack_require__("../../../../../src/app/server/controllers/question.service.ts");
var router_2 = __webpack_require__("../../../router/esm5/router.js");
var answer_service_1 = __webpack_require__("../../../../../src/app/server/controllers/answer.service.ts");
var ShowQuestionComponent = /** @class */ (function () {
    function ShowQuestionComponent(_router, _route, _questionService, _answerService) {
        this._router = _router;
        this._route = _route;
        this._questionService = _questionService;
        this._answerService = _answerService;
        this.question = new question_1.Question;
    }
    ShowQuestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) { return _this.question_id = params.id; });
        this.getQuestion();
    };
    ShowQuestionComponent.prototype.getQuestion = function () {
        var _this = this;
        console.log(this.question_id);
        this._questionService.getOneQuestion(this.question_id).subscribe(function (res) {
            _this.answers = res.json()._answer.sort(function (obj1, obj2) {
                return obj2.likes - obj1.likes;
            });
            _this.question = res.json();
        });
    };
    ShowQuestionComponent.prototype.likeAnswer = function (id) {
        var _this = this;
        this._answerService.likeAnswer(id).subscribe(function (res) {
            console.log("you should see this");
            _this.getQuestion();
        });
    };
    ShowQuestionComponent = __decorate([
        core_1.Component({
            selector: 'app-show-question',
            template: __webpack_require__("../../../../../src/app/body/show-question/show-question.component.html"),
            styles: [__webpack_require__("../../../../../src/app/body/show-question/show-question.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_2.ActivatedRoute,
            question_service_1.QuestionService,
            answer_service_1.AnswerService])
    ], ShowQuestionComponent);
    return ShowQuestionComponent;
}());
exports.ShowQuestionComponent = ShowQuestionComponent;


/***/ }),

/***/ "../../../../../src/app/login-body/login-body.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login-body/login-body.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Q&A</h1>\n<app-login></app-login>\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "../../../../../src/app/login-body/login-body.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var LoginBodyComponent = /** @class */ (function () {
    function LoginBodyComponent() {
    }
    LoginBodyComponent.prototype.ngOnInit = function () {
    };
    LoginBodyComponent = __decorate([
        core_1.Component({
            selector: 'app-login-body',
            template: __webpack_require__("../../../../../src/app/login-body/login-body.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login-body/login-body.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginBodyComponent);
    return LoginBodyComponent;
}());
exports.LoginBodyComponent = LoginBodyComponent;


/***/ }),

/***/ "../../../../../src/app/login-body/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login-body/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<fieldset>\n  <legend>Register</legend>\n  <form (submit)=\"userLogin()\">\n    <label for=\"email\">Email: </label><br>\n    <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"alert alert-danger\">\n      <p *ngIf=\"email.errors.required\" style=\"color: red;\">Email is required</p>\n      <p *ngIf=\"email.errors.email && !email.errors.required\" style=\"color: red;\">Invalid Email format</p>\n    </div>\n    <input type=\"text\" name=\"email\" class=\"form-control\" required email [(ngModel)]=\"user.email\" #email=\"ngModel\"><br>\n   \n    <label for=\"password\">Password: </label><br>\n    <input type=\"password\" name=\"password\" id=\"password\" class=\"form-control\" required [(ngModel)]=\"user.password\" #password=\"ngModel\"><br>\n    <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"alert alert-danger\">\n      <div *ngIf=\"password.errors.required\">\n        <p style=\"color: red;\">Password is required</p>\n      </div>\n    </div>\n\n    <input type=\"submit\" value=\"Register\">\n  </form>\n</fieldset>"

/***/ }),

/***/ "../../../../../src/app/login-body/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var user_service_1 = __webpack_require__("../../../../../src/app/server/controllers/user.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var user_1 = __webpack_require__("../../../../../src/app/server/models/user.ts");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(_router, _userService) {
        this._router = _router;
        this._userService = _userService;
        this.user = new user_1.User();
        this.errors = [];
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.userLogin = function () {
        var _this = this;
        this._userService.login(this.user, function (res) {
            if (res.json().errors) {
                console.log(res.json());
            }
            else {
                _this._router.navigateByUrl('/dashboard');
            }
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login-body/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login-body/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            user_service_1.UserService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "../../../../../src/app/login-body/registration/registration.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login-body/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<fieldset>\n  <legend>Register</legend>\n  <form (submit)=\"createUser()\">\n  \n    <label>Email:</label><br>\n    <div *ngIf=\"email.invalid && (email.dirty || email.touched)\">\n        <p *ngIf=\"email.errors.required\" style=\"color: red;\">Email is required</p>      \n        <p *ngIf=\"email.errors.email && !email.errors.required\" style=\"color: red;\">Invalid Email format</p>\n    </div>\n    <input type=\"email\" name=\"email\" required email [(ngModel)]=\"newUser.email\" #email=\"ngModel\"><br>\n\n    <label>First Name:</label><br>\n    <div *ngIf=\"firstName.invalid && (firstName.dirty || firstName.touched)\">\n      <p *ngIf=\"firstName.errors.required\" style=\"color: red;\">First name is required</p>\n      <p *ngIf=\"firstName.errors.minlength\" style=\"color: red;\">First name must be at least 2 characters</p> \n    </div>\n    <input type=\"text\" name=\"first_name\" required minlength=\"2\" [(ngModel)]=\"newUser.first_name\" #firstName=\"ngModel\"><br>\n   \n    <label>Last Name:</label><br>\n    <div *ngIf=\"lastName.invalid && (lastName.dirty || lastName.touched)\">\n      <p *ngIf=\"lastName.errors.required\" style=\"color: red;\">Last name is required</p>\n      <p *ngIf=\"lastName.errors.minlength\" style=\"color: red;\">Last name must be at least 2 characters</p>\n    </div>\n    <input type=\"text\" name=\"last_name\" required minlength=\"2\" [(ngModel)]=\"newUser.last_name\" #lastName=\"ngModel\"><br>\n    \n    <label>Password:</label>\n    <small>(Password requires at least 1 capital letter, 1 number, and 1 special character )</small><br>\n    <input type=\"password\" name=\"password\" required minlength=\"8\" [(ngModel)]=\"newUser.password\" #password=\"ngModel\"><br>\n    <div *ngIf=\"password.invalid && (password.dirty || password.touched)\">\n      <p *ngIf=\"password.errors.required\" style=\"color: red;\">Password is required</p>\n      <p *ngIf=\"password.errors.minlength\">Password must be at least 8 characters</p>\n    </div>\n\n    <label>Comfirmation:</label><br>\n    <input type=\"password\" name=\"pwConfirm\" required [(ngModel)]=\"newUser.password_confirm\" #pwConfirm=\"ngModel\"><br>\n    <div *ngIf=\"pwConfirm.invalid && (pwConfirm.dirty || pwConfirm.touched)\">\n      <p *ngIf=\"pwConfirm.errors.required\" style=\"color: red;\">Comfirmation Password is required</p>\n    </div>\n    <input type=\"submit\" value=\"Register\">\n  </form>\n</fieldset>\n"

/***/ }),

/***/ "../../../../../src/app/login-body/registration/registration.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var user_1 = __webpack_require__("../../../../../src/app/server/models/user.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var user_service_1 = __webpack_require__("../../../../../src/app/server/controllers/user.service.ts");
var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(_router, _userService) {
        this._router = _router;
        this._userService = _userService;
        this.newUser = new user_1.User();
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent.prototype.createUser = function () {
        var _this = this;
        this._userService.create(this.newUser).subscribe(function (res) {
            console.log(res.json().errors);
            if (res.json().errors == null) {
                console.log("im getting here ;D");
                _this._router.navigateByUrl('/dashboard');
            }
        });
    };
    RegistrationComponent = __decorate([
        core_1.Component({
            selector: 'app-registration',
            template: __webpack_require__("../../../../../src/app/login-body/registration/registration.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login-body/registration/registration.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            user_service_1.UserService])
    ], RegistrationComponent);
    return RegistrationComponent;
}());
exports.RegistrationComponent = RegistrationComponent;


/***/ }),

/***/ "../../../../../src/app/server/controllers/answer.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var AnswerService = /** @class */ (function () {
    function AnswerService(_http) {
        this._http = _http;
    }
    AnswerService.prototype.createAnswer = function (id, answer) {
        return this._http.post("/answer/create/" + id, answer);
    };
    AnswerService.prototype.likeAnswer = function (id) {
        return this._http.post("/answer/like/" + id, id);
    };
    AnswerService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], AnswerService);
    return AnswerService;
}());
exports.AnswerService = AnswerService;


/***/ }),

/***/ "../../../../../src/app/server/controllers/question.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var QuestionService = /** @class */ (function () {
    function QuestionService(_http) {
        this._http = _http;
    }
    QuestionService.prototype.getQuestions = function () {
        return this._http.get("/questions");
    };
    QuestionService.prototype.createQuestion = function (question) {
        return this._http.post("/question/create", question);
    };
    QuestionService.prototype.getOneQuestion = function (id) {
        return this._http.get("/question/answer/" + id);
    };
    QuestionService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], QuestionService);
    return QuestionService;
}());
exports.QuestionService = QuestionService;


/***/ }),

/***/ "../../../../../src/app/server/controllers/search-q.pipe.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var SearchQPipe = /** @class */ (function () {
    function SearchQPipe() {
    }
    SearchQPipe.prototype.transform = function (items, searchText) {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        searchText = searchText.toLowerCase();
        return items.filter(function (list) {
            console.log(list);
            return list.question.toLowerCase().includes(searchText);
        });
    };
    SearchQPipe = __decorate([
        core_1.Pipe({
            name: 'filter'
        })
    ], SearchQPipe);
    return SearchQPipe;
}());
exports.SearchQPipe = SearchQPipe;


/***/ }),

/***/ "../../../../../src/app/server/controllers/user.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var UserService = /** @class */ (function () {
    function UserService(_http) {
        this._http = _http;
    }
    UserService.prototype.getCurrentUser = function () {
        return this._http.get("/user");
    };
    UserService.prototype.create = function (user) {
        return this._http.post("/user/create", user);
    };
    UserService.prototype.login = function (user, callback) {
        this._http.post("/user/login", user).subscribe(function (res) {
            callback(res);
        }, function (err) {
            callback(err);
        });
    };
    UserService.prototype.logout = function () {
        return this._http.delete("/user/logout");
    };
    UserService.prototype.getUsers = function () {
        return this._http.get("/users");
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;


/***/ }),

/***/ "../../../../../src/app/server/models/answer.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Answer = /** @class */ (function () {
    function Answer() {
    }
    return Answer;
}());
exports.Answer = Answer;


/***/ }),

/***/ "../../../../../src/app/server/models/question.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Question = /** @class */ (function () {
    function Question() {
    }
    return Question;
}());
exports.Question = Question;


/***/ }),

/***/ "../../../../../src/app/server/models/user.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
exports.User = User;


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map