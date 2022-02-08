import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import {MainComponent } from './Pages/main/main.component'
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { OverviewComponent } from './Pages/overview/overview.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzTableModule } from 'ng-zorro-antd/table';
import { AppointmentsComponent } from './Pages/Patients/appointments/appointments.component';
import { PatientsComponent } from './Pages/Patients/patients/patients.component';
import { OPDComponent } from './Pages/Patients/opd/opd.component';
import { IPDComponent } from './Pages/Patients/ipd/ipd.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { CalendarComponent } from './Pages/calendar/calendar.component';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { UsersComponent } from './Pages/Settings/users/users.component';
import { RolesComponent } from './Pages/Settings/roles/roles.component';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { LaboratoryComponent } from './Pages/MedicalServices/laboratory/laboratory.component';
import { CategoriesComponent } from './Pages/MedicalServices/categories/categories.component';
import { StaffsComponent } from './Pages/Organizations/staffs/staffs.component';
import { DepartmentsComponent } from './Pages/Organizations/departments/departments.component';


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    OverviewComponent,
    AppointmentsComponent,
    PatientsComponent,
    OPDComponent,
    IPDComponent,
    CalendarComponent,
    UsersComponent,
    RolesComponent,
    LaboratoryComponent,
    CategoriesComponent,
    StaffsComponent,
    DepartmentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzFormModule,
    NzInputModule,
    NzCardModule,
    NzButtonModule,
    NzMenuModule,
    NzLayoutModule,
    NzTableModule,
    NzDropDownModule,
    NzCalendarModule,
    NzAlertModule,
    NzBadgeModule,
    NzDividerModule,

  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
