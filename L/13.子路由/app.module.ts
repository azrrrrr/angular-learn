import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ChildComponent } from './child/child.component';
import { AboutComponent } from './about/about.component';



const appRoutes: Routes = [
  { path:'', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent, children: [ { path: 'child', component: ChildComponent } ] },
  { path: 'about', component: AboutComponent }
  { path: '**', component: NotfoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotfoundComponent,
    ChildComponent,
    AboutComponent,
  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
