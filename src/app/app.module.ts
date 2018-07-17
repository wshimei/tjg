import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FaqComponent } from './faq/faq.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductComponent } from './product/product.component';
import { PrintingMethodsComponent } from './printing-methods/printing-methods.component';
import { BlogComponent } from './blog/blog.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

import { QuestionService } from './faq/question.service';

import { environment } from './../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    routingComponents,
    PageNotFoundComponent,
    FaqComponent,
    ContactUsComponent,
    ProductComponent,
    PrintingMethodsComponent,
    BlogComponent,
    CallToActionComponent,
    ProductListComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
