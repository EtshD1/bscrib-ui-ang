import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SighupComponent } from './sighup/sighup.component'

const routes: Routes = [
  {
    path: "signup",
    component: SighupComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "homepage",
    component: HomepageComponent,
  },
  {
    path: "profile",
    component: ProfileComponent,
  },
  {
    path: "",
    redirectTo: "homepage",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
