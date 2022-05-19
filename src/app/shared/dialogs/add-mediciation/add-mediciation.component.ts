import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-mediciation',
  templateUrl: './add-mediciation.component.html',
  styleUrls: ['./add-mediciation.component.css']
})
export class AddMediciationComponent implements OnInit {
  patientOneModel : any = {};
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  closeDialog(){
    this.activeModal.dismiss();
  }

  submit($medicineData:any){
    this.activeModal.dismiss({data : $medicineData.form.value});

  }

}
