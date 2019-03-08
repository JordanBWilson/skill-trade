import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules  } from '@angular/router';

const routes: Routes = [
  { path: 'sign-in', 
    loadChildren: './login-splash/login-splash.module#LoginSplashModule'
  },
  { path: '',   
    redirectTo: '/sign-in', 
    pathMatch: 'full' 
  },
  { path: '**', 
    loadChildren: './page-not-found/page-not-found.module#PageNotFoundModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {

    preloadingStrategy: PreloadAllModules // <-This will load the other modules once the first module loads
  }
    
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
