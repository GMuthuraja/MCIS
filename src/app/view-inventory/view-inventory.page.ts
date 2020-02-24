import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-view-inventory',
  templateUrl: './view-inventory.page.html',
  styleUrls: ['./view-inventory.page.scss'],
})

export class ViewInventoryPage implements OnInit {

  manufacturerList: any;

  constructor(private app: AppComponent) { }

  ngOnInit() {
    this.app.getManufacturerList().then(res => {
      if (res) {
        this.manufacturerList = res;
      }
      
      console.log(res);
    });
  }

}
