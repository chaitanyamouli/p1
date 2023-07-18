import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';

import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FooterComponent } from './footer/footer.component';
import { Navbar1Component } from './navbar1/navbar1.component';
import { SignupComponent } from './signup/signup.component';
import { RegisterdoneComponent } from './registerdone/registerdone.component';
import { CardComponent } from './card/card.component';
import { Card1Component } from './card1/card1.component';
import { Card2Component } from './card2/card2.component';
import { Card3Component } from './card3/card3.component';
import { P1Component } from './p1/p1.component';
import { P2Component} from './p2/p2.component';
import { P3Component } from './p3/p3.component';
import { P4Component } from './p4/p4.component';
import { R1Component } from './r1/r1.component';
import { R2Component } from './r2/r2.component';
import { R3Component } from './r3/r3.component';
import { R4Component } from './r4/r4.component';
import { D1Component } from './d1/d1.component';
import { FaqComponent } from './faq/faq.component';
import { D2Component } from './d2/d2.component';
import { D3Component } from './d3/d3.component';
import { L1Component } from './l1/l1.component';
import { L2Component } from './l2/l2.component';
import { L3Component } from './l3/l3.component';
import { L4Component } from './l4/l4.component';
import { E1Component } from './e1/e1.component';
import { E2Component } from './e2/e2.component';
import { E3Component } from './e3/e3.component';
import { E4Component } from './e4/e4.component';
import { G1Component } from './g1/g1.component';
import { Card4Component } from './card4/card4.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    LoginComponent,
    WelcomeComponent,
    FooterComponent,
    Navbar1Component,
    SignupComponent,
    RegisterdoneComponent,
    CardComponent,
    Card1Component,
    Card2Component,
    Card3Component,
    P1Component,
    P2Component,
    P3Component,
    P4Component,
    R1Component,
    R2Component,
    R3Component,
    R4Component,
    D1Component,
    FaqComponent,
    D2Component,
    D3Component,
    L1Component,
    L2Component,
    L3Component,
    L4Component,
    E1Component,
    E2Component,
    E3Component,
    E4Component,
    G1Component,
    Card4Component
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
