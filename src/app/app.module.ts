// import { ProductModule } from './product/product.module';
// import { ProductRoutingModule } from './product/product-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { CallToActionComponent } from './call-to-action/call-to-action.component';
import { ProductListComponent } from './product-list/product-list.component';

import { QuestionService } from './faq/question.service';

import { environment } from './../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    routingComponents,
    CallToActionComponent,
    ProductListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // ProductRoutingModule,
    // ProductModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
