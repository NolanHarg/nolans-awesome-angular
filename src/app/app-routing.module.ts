import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'about-me', loadChildren: () => import('./about-me/about-me.module').then(m => m.AboutMeModule)  },
  { path: '', redirectTo: 'about-me', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
