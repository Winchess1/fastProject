import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from 'src/app/details/details.component';
import { Authguard } from 'src/app/service/auth.guard';

const routes: Routes = [
  {path: '',component:DetailsComponent ,canActivate: [Authguard] },
  // {path:'**',redirectTo:'',pathMatch:'full'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MainModule { }
