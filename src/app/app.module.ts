import { HttpService } from './core/http/http.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SubmitPageComponent } from './submit-page/submit-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DeleteModalComponent } from './shared/delete-modal/delete-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SubmitPageComponent,
    NavBarComponent,
    DeleteModalComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DeleteModalComponent]
})
export class AppModule { }
