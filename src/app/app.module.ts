import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { ROUTING } from './app.routing';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { EnterDetailsComponent } from './enter-details/enter-details.component';
import { DisplayDetailsComponent } from './display-details/display-details.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { RouterModule } from '@angular/router';
import { DisplayMonthsComponent } from './display-months/display-months.component';


@NgModule({
  declarations: [
    AppComponent,
    EnterDetailsComponent,
    DisplayDetailsComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    DisplayMonthsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ROUTING

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
