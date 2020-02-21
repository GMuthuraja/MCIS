import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-add-manufacturer',
  templateUrl: './add-manufacturer.page.html',
  styleUrls: ['./add-manufacturer.page.scss'],
})

export class AddManufacturerPage implements OnInit {

  manufacturerName: any;

  constructor(private app: AppComponent) { }

  ngOnInit() { }

  submitValues() {
    if (!this.manufacturerName) {
      alert("Enter Manufacturer name");
      return;
    }

    this.app.insertRow(this.manufacturerName);
  }
}
