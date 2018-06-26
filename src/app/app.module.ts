import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FaqComponent } from './faq/faq.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductComponent } from './product/product.component';
import { PrintingMethodsComponent } from './printing-methods/printing-methods.component';
import { BlogComponent } from './blog/blog.component';

import { QuestionService } from './question.service'
import { HttpClientModule } from '@angular/common/http';
import { CallToActionComponent } from './call-to-action/call-to-action.component';

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
    CallToActionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
