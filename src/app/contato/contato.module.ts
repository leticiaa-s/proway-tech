import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatoRoutingModule } from './contato-routing.module';
import { ContatoComponent } from './contato.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {IMaskDirective, IMaskDirectiveModule} from 'angular-imask';

@NgModule({
  declarations: [
    ContatoComponent
  ],
  imports: [
    CommonModule,
    ContatoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    IMaskDirectiveModule
    ]
})
export class ContatoModule { }
