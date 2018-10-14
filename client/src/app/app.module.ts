import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LoginPageComponent } from './components/login/login-page.component';
import { WidgetBarComponent } from './components/widget-bar/widget-bar.component';
import { ResizableModule } from 'angular-resizable-element';
import { HomeComponent } from './components/home/home.component';
import { WidgetComponent } from './components/widget/widget.component';

const appRoutes: Routes = [
    { path: '',
        redirectTo: '/login',
        pathMatch: 'full',
    },
    {
        path: 'login',
        component: LoginPageComponent
    },
    {
        path: 'home',
        component: HomeComponent
    }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    WidgetBarComponent,
    HomeComponent,
    WidgetComponent,
  ],
  imports: [
    RouterModule.forRoot(
        appRoutes,
        { enableTracing: true }
      ),
      HttpClientModule,
      BrowserModule,
      AngularSvgIconModule,
      NgbModule,
      ResizableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
