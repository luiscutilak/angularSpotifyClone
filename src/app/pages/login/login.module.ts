import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { LoginRotas } from './login.routes';



@NgModule({
  declarations: [   //declarations always receive components
    LoginComponent,
  ],
  imports: [      // imports always receive Module
    CommonModule,
    RouterModule.forChild(LoginRotas)
  ]
})
export class LoginModule { }
