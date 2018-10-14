import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LoginPageComponent } from './pages/login/login-page.component';

const appRoutes: Routes = [
    { path: '',
        redirectTo: '/login',
        pathMatch: 'full',
    },
    {
        path: 'login',
        component: LoginPageComponent
    }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent
  ],
  imports: [
    RouterModule.forRoot(
        appRoutes,
        { enableTracing: true }
      ),
      HttpClientModule,
      BrowserModule,
      AngularSvgIconModule,
      NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }