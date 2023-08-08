import { ErrorComponent } from './common/error.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './common/contact.component';
import { HomeComponent } from './common/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  { path: 'contact', component: ContactComponent },

  { path: 'error', component: ErrorComponent },
  { path: '**', component: ErrorComponent, data: { error: 404 } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {
  //comment
}
