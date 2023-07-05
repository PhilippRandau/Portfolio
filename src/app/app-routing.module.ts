import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { HomeComponent } from './home/home.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'data-protection', component: DataProtectionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes, {
    scrollPositionRestoration: 'enabled',
    enableTracing: false,
    anchorScrolling: 'enabled',
    scrollOffset: [
      0,
      300
    ]
  }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
