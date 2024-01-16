import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FilterMapPipe } from '../pipes/filter-map.pipe';
import { RouterModule } from '@angular/router';
import { MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapComponent } from '../map/map.component';
import { NearestPharmacyMapComponent } from '../nearest-pharmacy-map/nearest-pharmacy-map.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    Navbar2Component,
    MapComponent,
    NearestPharmacyMapComponent,
    FilterMapPipe
    
  ],
  imports: [
  
    CommonModule,
    RouterModule,
    SharedRoutingModule,
    MatButtonModule,
    HttpClientModule,
    MatIconModule,
    MatDividerModule,
    NgxSpinnerModule.forRoot(), 
    ToastrModule.forRoot(),
    MatDialogModule,
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
    
    ],
  exports: [
    CommonModule,
    NavbarComponent,
    FooterComponent,
    Navbar2Component,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MapComponent,
    NearestPharmacyMapComponent,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule

  ]
})
export class SharedModule { }