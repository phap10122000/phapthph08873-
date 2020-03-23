import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryComponent } from './category/category.component';
import { SliderComponent } from './slider/slider.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceComponent } from './service/service.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductService } from './product.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, ProductComponent, ProductListComponent, CategoryComponent, SliderComponent, HomeComponent, AboutComponent, ContactComponent, ServiceComponent, ProductAddComponent, ProductManagerComponent, ProductDetailComponent, ProductEditComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProductService]
})
export class AppModule { }
