import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, NgForm } from '@angular/forms';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-add-model',
  templateUrl: './add-model.page.html',
  styleUrls: ['./add-model.page.scss'],
})

export class AddModelPage implements OnInit {

  addModelForm: FormGroup;
  manufacturerList: any;
  selectedItemIndex: any;

  constructor(
    private formBuilder: FormBuilder,
    private app: AppComponent) { }

  ngOnInit() {

    this.addModelForm = this.formBuilder.group({
      model: ['', Validators.compose([Validators.required])],
      manufacturer: ['', Validators.compose([Validators.required])],
      color: ['', Validators.compose([Validators.required])],
      year: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*')])],
      register_number: ['', Validators.compose([Validators.required])],
      notes: ['', Validators.compose([Validators.required])]
    });

    this.app.getManufacturerList().then(res => {
      if (res) {
        this.manufacturerList = res;
      }
    });
  }

  onChange($event) {
    this.selectedItemIndex = $event.target.value.Pid;
  }


  submitValue(form: NgForm) {
    let newValues = {
      index: this.selectedItemIndex,
      model: form["model"],
      manufacturer: form["manufacturer"].ManufacturerName,
      color: form["color"],
      register_number: form["register_number"],
      notes: form["notes"]
    }

    this.app.updateRow(newValues);
  }
}
