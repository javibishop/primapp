import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { LayoutModule } from '@angular/cdk/layout';

import { ErrorInterceptor } from '../app/helpers/error.interceptor';
import { JwtInterceptor } from '../app/helpers/jwt.interceptor';
import { AuthGuard } from '../app/helpers/auth.guard';

import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule,
         MatListModule, MatFormFieldModule, MatCardModule, MatInputModule,
         MatRadioModule, MatSelectModule, MatCheckboxModule, MatTableModule, MatMenuModule,
         MatTabsModule, MatDatepickerModule, MatNativeDateModule,
         MatGridListModule, MatProgressSpinnerModule
       } from '@angular/material';
import {MatDialog, MatDialogRef}  from '@angular/material/dialog';     

import { ProfesionalManagerComponent } from './profesional/profesional-manager/profesional-manager.component';
import { ProfesionalListComponent } from './profesional/profesional-list/profesional-list.component';
import { FilterBoxComponent } from './filter-box/filter-box.component';
import { ProfesionalEditComponent } from './profesional/profesional-edit/profesional-edit.component';
import { EspecialidadManagerComponent } from './especialidad/especialidad-manager.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ConsejeriaManagerComponent } from './consejeria/consejeria-manager/consejeria-manager.component';
import { ConsejeriaEditComponent } from './consejeria/consejeria-edit/consejeria-edit.component';
import { ConsejeriaListComponent } from './consejeria/consejeria-list/consejeria-list.component';
import { ConsejeriaItemComponent } from './consejeria/consejeria-item/consejeria-item.component';
import { AntecedenteComponent } from './consejeria/antecedente/antecedente.component';
import { UsuariaComponent } from './consejeria/usuaria/usuaria.component';
import { GestaActualComponent } from './consejeria/gesta-actual/gesta-actual.component';
import { EstudioComplementarioComponent } from './consejeria/estudio-complementario/estudio-complementario.component';
import { EntrevistaPostComponent } from './consejeria/entrevista-post/entrevista-post.component';
import { EspecialidadListComponent } from './especialidad/especialidad-list/especialidad-list.component';
import { EspecialidadEditComponent } from './especialidad/especialidad-edit/especialidad-edit.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LoaderComponent } from './loader/loader.component';
import { LoaderService } from './services/loader.service';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    AppMenuComponent,
    ProfesionalManagerComponent,
    ProfesionalListComponent,
    FilterBoxComponent,
    ProfesionalEditComponent,
    EspecialidadManagerComponent,
    ConsejeriaManagerComponent,
    ConsejeriaEditComponent,
    ConsejeriaListComponent,
    ConsejeriaItemComponent,
    AntecedenteComponent,
    UsuariaComponent,
    GestaActualComponent,
    EstudioComplementarioComponent,
    EntrevistaPostComponent,
    EspecialidadListComponent,
    EspecialidadEditComponent,
    LoginComponent,
    HomeComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTableModule,
    MatMenuModule,
    HttpClientModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule, 
    MatProgressSpinnerModule,
    // MatDialog, 
    // MatDialogRef,
    RouterModule.forRoot([
      { path: 'profesionales/:id', component: ProfesionalEditComponent, canActivate: [AuthGuard] },
      { path: 'profesionales' , component: ProfesionalManagerComponent, canActivate: [AuthGuard] },
      { path: 'consejerias/:id', component: ConsejeriaEditComponent, canActivate: [AuthGuard] },
      { path: 'consejerias' , component: ConsejeriaManagerComponent, canActivate: [AuthGuard]},
      { path: 'especialidades' , component: EspecialidadManagerComponent, canActivate: [AuthGuard] },
      { path: 'especialidades/:id', component: EspecialidadEditComponent, canActivate: [AuthGuard] },
      { path: '', component: HomeComponent, canActivate: [AuthGuard] },
      { path: 'login', component: LoginComponent },
      
    ])
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
