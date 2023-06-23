import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './signup/signup.component';
import { RegisterdoneComponent } from './registerdone/registerdone.component';
import { ContactComponent } from './contact/contact.component';
import { CardComponent } from './card/card.component';
import { AboutComponent } from './about/about.component';
import { Card1Component } from './card1/card1.component';
import { Card2Component } from './card2/card2.component';
import { Card3Component } from './card3/card3.component';
import { P1Component } from './p1/p1.component';
import { P2Component } from './p2/p2.component';
import { P3Component } from './p3/p3.component';
import { P4Component } from './p4/p4.component';
import { R1Component } from './r1/r1.component';
import { R2Component } from './r2/r2.component';
import { R3Component } from './r3/r3.component';
import { R4Component } from './r4/r4.component';
import { D1Component } from './d1/d1.component';
import { D2Component } from './d2/d2.component';
import { D3Component } from './d3/d3.component';
import { L1Component } from './l1/l1.component';
import { L2Component } from './l2/l2.component';
import { L3Component } from './l3/l3.component';
import { L4Component } from './l4/l4.component';
import { G1Component } from './g1/g1.component';


const routes: Routes = [
  {path:'',component:WelcomeComponent},
  {path:'banner',component:BannerComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  { path:'signup',component:SignupComponent},
  {path:'registerdone',component:RegisterdoneComponent},
  {path:'contact',component:ContactComponent},
  {path:'card',component:CardComponent},
  {path:'about',component:AboutComponent},
  {path:'card1',component:Card1Component},
  {path:'card2',component:Card2Component},
  {path:'card3',component:Card3Component},
  {path:'p1',component:P1Component},
  {path:'p2',component:P2Component},
  {path:'p3',component:P3Component},
  {path:'p4',component:P4Component},
  {path:'r1',component:R1Component},
  {path:'r2',component:R2Component},
  {path:'r3',component:R3Component},
  {path:'r4',component:R4Component},
  {path:'d1',component:D1Component},
  {path:'d2',component:D2Component},
  {path: 'd3',component:D3Component},
  {path:'l1',component:L1Component},
  {path:'l2',component:L2Component},
  {path:'l3',component:L3Component},
  {path:'l4',component:L4Component},
  {path:'g1',component:G1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
