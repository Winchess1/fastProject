import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { Authguard } from './service/auth.guard';
const routes: Routes = [
  { path: '', component: LandingComponent },
  {
    path: 'details', loadChildren: () => import('./module/main/main.module').then(m=>m.MainModule)
  },
  // {path:'**',redirectTo:'',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
