import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { WeatherApiService } from '../weather-api-service/weather-api.service'
import {ErrorStateMatcher} from '@angular/material/core';


@Component({
  selector: 'app-login-splash',
  templateUrl: './login-splash.component.html',
  styleUrls: ['./login-splash.component.scss']
})
export class LoginSplashComponent implements OnInit {

  constructor(private weatherApi: WeatherApiService) { }

  // private weatherForcast: Array<object> = [];
  // private pos: object;
  // public isPositioned: boolean = false;

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }


  ngOnInit() {
    
    // this.getPosition(this.pos)
    //   .then((position) => {
    //     this.pos = position;
    //     this.isPositioned = true;
    //     console.log(this.isPositioned);
    //     this.displayWeatherLatLon();
    //   })
    //   .catch((err) => {
    //     console.error(err.message);
    //     this.isPositioned = false;
    //     console.log(this.isPositioned);
    //   });

  }

  // public displayWeatherLatLon(): void{
  //   this.weatherApi.getWeatherLatLon(this.pos).subscribe((data:  Array<object>) => {
  //     this.weatherForcast = data;
  //     console.log(this.weatherForcast);
  //   });
  // }

  // public getPosition(options) {
  //   return new Promise(function (resolve, reject) {
  //     navigator.geolocation.getCurrentPosition(resolve, reject, options);
  //   });
  // }


}

