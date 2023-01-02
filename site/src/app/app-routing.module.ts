import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './module/main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  {
    path: 'gallary',
    loadChildren: () =>
      import('./module/gallary/gallary.module').then((m) => m.GallaryModule),
  },
  { path: '**', component: MainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
