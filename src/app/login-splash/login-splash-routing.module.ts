import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginSplashComponent } from './login-splash.component';




const routes: Routes = [
  {
    path: '',
    component: LoginSplashComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginSplashRoutingModule { }
