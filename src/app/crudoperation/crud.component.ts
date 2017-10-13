import { Component, TemplateRef } from '@angular/core';
import { CrudService } from "../services/crud.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
      moduleId: module.id,

  selector: 'crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent {
        id: any;
     welcome : string;
     public modalRef: BsModalRef;
      complexForm: FormGroup;
      UserInfo:any;
     info:any;
     information:any[]
    games : [{
        game: string,
        platform : string,
        release : string
    }];
    constructor(fb: FormBuilder,
                private crudService: CrudService,
                private modalService: BsModalService
    ){
         this.complexForm = fb.group({
           
           'Id' :  [null,Validators.required],
           'Name' :  [null,Validators.required],

           'Phone' : [null,Validators.required],

           'Email' : [null,Validators.required],

           'Address' : [null,Validators.required],

           'State' : [null,Validators.required],

           'City' : [null,Validators.required],
           
           

        },
          
        )
        this.welcome = "Display List using ngFor in Angular 2"
          this.crudService.getAll().subscribe(data => {
            console.log(data);
            this.info = data;
           // this.information=this.info._body
        });
      
    };

 
  edit(tempEdit:TemplateRef<any>,model:any){
      this.UserInfo=model;
      this.modalRef = this.modalService.show(tempEdit);
  }
submitFormForEdit(model:any)
{
    this.crudService.update(model).subscribe(
      data => {
       // this.toasterService.showToaster('Successfully Added');
         },
      
     );
}
delete(tempDelete:TemplateRef<any>,model:any){
      this.UserInfo=model;
      this.modalRef = this.modalService.show(tempDelete);
  }
  deleteUser(model:any)
  {
      this.id=model.Id
       this.crudService.delete(this.id).subscribe(
      data => {
       // this.toasterService.showToaster('Successfully Added');
              window.location.reload();

         },
      
     );

  }
}