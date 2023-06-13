import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { ReachMeComponent } from './reach-me/reach-me.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent,
    IntroductionComponent,
    ReachMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
