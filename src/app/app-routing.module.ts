import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogComponent } from './blog/blog.component';
import { ProductComponent } from './product/product.component';
import { PrintingMethodsComponent } from './printing-methods/printing-methods.component';
import { FaqComponent } from './faq/faq.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'products', component: ProductComponent },
  { path: 'products/:categoryName', component: ProductComponent},
  { path: 'printing-methods', component: PrintingMethodsComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
// tslint:disable-next-line:max-line-length
export const routingComponents = [HomePageComponent, AboutUsComponent, BlogComponent, ProductComponent, ProductListComponent, ProductDetailsComponent, PrintingMethodsComponent, FaqComponent, ContactUsComponent, PageNotFoundComponent];
