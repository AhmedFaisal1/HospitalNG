import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './Pages/main/main.component';
import { OverviewComponent } from './Pages/overview/overview.component';
import { AppointmentsComponent } from './Pages/Patients/appointments/appointments.component'
import { PatientsComponent } from './Pages/Patients/patients/patients.component';
import { OPDComponent } from './Pages/Patients/opd/opd.component';
import { IPDComponent } from './Pages/Patients/ipd/ipd.component';
import { CalendarComponent } from './Pages/calendar/calendar.component';
import { UsersComponent } from './Pages/Settings/users/users.component';
import { RolesComponent } from './Pages/Settings/roles/roles.component';
import { LaboratoryComponent } from './Pages/MedicalServices/laboratory/laboratory.component';
import { CategoriesComponent } from './Pages/MedicalServices/categories/categories.component';
import { StaffsComponent } from './Pages/Organizations/staffs/staffs.component';
import { DepartmentsComponent } from './Pages/Organizations/departments/departments.component';


const routes: Routes = [
  {
    path: "main", component: MainComponent,
    children: [
      {path: "overview",component: OverviewComponent},
      {path: "patient",children: [
          { path: "appoiments", component: AppointmentsComponent },
          { path: "patients", component: PatientsComponent },
          { path: "opd", component: OPDComponent },
          { path: "ipd", component: IPDComponent },
        ]
      },
      { path: "calendar", component: CalendarComponent },
      {
        path: "settings",
        children: [
          { path: "users", component: UsersComponent },
          { path: "roles", component: RolesComponent }
        ]
      },
      {
        path: "services",
        children: [
          { path: "laboratory", component: LaboratoryComponent },
          { path: "radiology", component: CategoriesComponent }
        ]
      },
      {
        path: "organizations",
        children: [
          { path: "staff", component: StaffsComponent },
          { path: "departments", component: DepartmentsComponent }
        ]
      },
    ],
  }
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
