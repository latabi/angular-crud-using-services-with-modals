import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CrudComponent } from "./crudoperation/crud.component";
import { CrudService } from "./services/crud.service";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { BsModalService, ModalModule } from "ngx-bootstrap/modal";
import { AddmodelComponent } from "./crudoperation/addmodel/addmodel.component";


@NgModule({
  declarations: [
    AppComponent,CrudComponent,
    AddmodelComponent
  ],
  imports: [
    BrowserModule,
     HttpModule,
     FormsModule,
     ModalModule.forRoot(),
    ReactiveFormsModule,
  ],
  providers: [ CrudService,
  BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
