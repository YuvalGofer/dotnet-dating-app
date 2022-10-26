import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports:[
    BsDropdownModule,
    ToastrModule
  ]
})
export class CoreModule { }
