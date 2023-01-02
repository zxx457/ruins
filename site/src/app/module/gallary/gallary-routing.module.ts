import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GallaryComponent } from './gallary.component';

const routes: Routes = [{ path: '', component: GallaryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GallaryRoutingModule { }
