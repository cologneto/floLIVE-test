import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule} from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { RouterModule, Routes} from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatNativeDateModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainLeftComponent } from './main-left/main-left.component';
import { MainRightComponent } from './main-right/main-right.component';
import { AccountComponent } from './account/account.component';
import { CustomerComponent } from './customer/customer.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ButtonToggleComponent } from './main-right/button.toggle/button.toggle.component';
import { SupportFormComponent } from './account/support-form/support-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ButtonReuseComponent } from './button-reuse/button-reuse.component';
import {MatIconModule} from '@angular/material/icon';

const appRoutes: Routes = [
  { path: '', component: AppComponent},
  { path: 'customer', component: CustomerComponent},
  { path: 'account', component: AccountComponent},
  { path: 'form', component: DynamicFormComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    MainLeftComponent,
    MainRightComponent,
    AccountComponent,
    CustomerComponent,
    ButtonToggleComponent,
    SupportFormComponent,
    DynamicFormComponent,
    ButtonReuseComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatToolbarModule,
    MatListModule,
    MatButtonToggleModule,
    MatTableModule,
    MatFormFieldModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    MatInputModule,
    MatRadioModule,
    NgxMatFileInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
