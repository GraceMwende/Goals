import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-count.pipe';
import { GoalFormComponent } from './goal-form/goal-form.component';
import { FormsModule } from '@angular/forms';
import { GoalService } from './goal-service/goal.service';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    StrikethroughDirective,
    DateCountPipe,
    GoalFormComponent,
    NavbarComponent,
    routingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [GoalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
