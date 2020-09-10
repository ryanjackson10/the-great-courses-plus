import { NgModule } from '@angular/core';
import { DemoService } from './demo.service';
import { Routes, RouterModule } from '@angular/router';
import {Observable} from 'rxjs/Rx';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {    


  }




