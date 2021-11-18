import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForfaitsComponent } from './components/forfaits/forfaits.component';
import { ForfaitItemComponent } from './components/forfait-item/forfait-item.component';
import { MiniForfaitsComponent } from './components/mini-forfaits/mini-forfaits.component';
import { MiniForfaitItemComponent } from './components/mini-forfait-item/mini-forfait-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StarComponent } from './components/star/star.component';
import { BoutonCtaComponent } from './components/bouton-cta/bouton-cta.component';


@NgModule({
  declarations: [
    AppComponent,
    ForfaitsComponent,
    ForfaitItemComponent,
    MiniForfaitsComponent,
    MiniForfaitItemComponent,
    StarComponent,
    BoutonCtaComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule, 
    MatIconModule, StoreModule.forRoot({}, {}), NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
