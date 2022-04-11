import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosiComponent } from './modules/todosi/todosi.component';

const routes: Routes = [
  { path: '', component: TodosiComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
