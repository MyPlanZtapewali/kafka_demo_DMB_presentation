import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { OrderComponent } from './order/order.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'cart', component: CartComponent},
    { path: 'order', component : OrderComponent},
];

@NgModule({
    //declarations: [AppComponent, HomeComponent, CartComponent],
    imports: [BrowserModule, RouterModule.forRoot(routes)], // Configuration du routage
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule {}
