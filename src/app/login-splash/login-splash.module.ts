
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from  '@angular/common/http';
import { LoginSplashRoutingModule } from './login-splash-routing.module';
import { LoginSplashComponent } from './login-splash.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';

@NgModule({
  declarations: [
    LoginSplashComponent
  ],
  imports: [
    LoginSplashRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class LoginSplashModule { }
