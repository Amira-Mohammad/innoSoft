import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RegistrationComponent } from './registration/registration.component';
import { GoalsComponent } from './goals/goals.component';
import { InitiativesComponent } from './initiatives/initiatives.component';
import { OpportunitiesComponent } from './opportunities/opportunities.component';
import { AcheivementsComponent } from './acheivements/acheivements.component';
import { PartnershipsComponent } from './partnerships/partnerships.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ActiveLinkDirective } from './active-link.directive';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    RegistrationComponent,
    GoalsComponent,
    InitiativesComponent,
    OpportunitiesComponent,
    AcheivementsComponent,
    PartnershipsComponent,
    ContactComponent,
    FooterComponent,
    ActiveLinkDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
