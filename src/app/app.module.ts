import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialOneComponent } from './material-one/material-one.component';
import { MaterialTwoComponent } from './material-two/material-two.component';
import { MaterialThreeComponent } from './material-three/material-three.component';
import { MaterialFourComponent } from './material-four/material-four.component';
//Animations
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

//use for autocomplete Input Modules
import {MatInputModule} from '@angular/material/Input';

//checkbox
import {MatCheckboxModule} from '@angular/material/checkbox';

//Select module
import {MatSelectModule} from '@angular/material/select';

//menu
import {MatMenuModule} from '@angular/material/menu';

//buttons
import {MatButtonModule} from '@angular/material/button';


//Divider
import {MatDividerModule} from '@angular/material/divider';

//Radio
import {MatRadioModule} from '@angular/material/radio';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    MaterialOneComponent,
    MaterialTwoComponent,
    MaterialThreeComponent,
    MaterialFourComponent,
    DialogBoxComponent,  
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatMenuModule,
    MatCheckboxModule,
    MatDividerModule,
    MatRadioModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
