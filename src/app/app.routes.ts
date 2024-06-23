import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/home/home.component';
import { Pregunta2Component } from './dashboard/preguntas/pregunta-2/pregunta-2.component';
import { Pregunta3Component } from './dashboard/preguntas/pregunta-3/pregunta-3.component';
import { Pregunta4Component } from './dashboard/preguntas/pregunta-4/pregunta-4.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "dashboard", component: DashboardComponent,
    canActivate: [authGuard],
    children: [
      {path: "home", component: HomeComponent},
      {path: "pregunta2", component: Pregunta2Component},
      {path: "pregunta3", component: Pregunta3Component},
      {path: "Pregunta4", component: Pregunta4Component}

    ]
  },
  {path: "", redirectTo: "login", pathMatch: "full"},
  {path: "**", component: PageNotFoundComponent }
];
