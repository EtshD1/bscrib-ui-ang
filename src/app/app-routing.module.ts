import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
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
    path: "my-profile",
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "",
    component: HomepageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "logout",
    component: LogoutComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
