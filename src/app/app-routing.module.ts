import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MaterialOneComponent} from './material-one/material-one.component';
import {MaterialTwoComponent} from './material-two/material-two.component';
import {MaterialThreeComponent} from './material-three/material-three.component';
import {MaterialFourComponent} from './material-four/material-four.component';

const routes: Routes = [{path:'material-one',component: MaterialOneComponent},
                        {path:'material-two',component: MaterialTwoComponent},
                        {path:'material-three',component: MaterialThreeComponent},
                        {path:'material-four',component: MaterialFourComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
