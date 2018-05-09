import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

import { HeaderComponent } from '@app/shared/header/header.component';
import { FooterComponent } from '@app/shared/footer/footer.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        outlet: 'header',
        component: HeaderComponent
      },
      {
        path: '',
        component: HomeComponent
      },
      {
        path: '',
        outlet: 'footer',
        component: FooterComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
