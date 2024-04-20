import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { MessageComponent } from './components/message/message.component';
import { WhyComponent } from './components/why/why.component';
import { PackagesComponent } from './components/packages/packages.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    QuestionsComponent,
    MessageComponent,
    WhyComponent,
    PackagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
