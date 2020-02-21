import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent {

  readonly database_name: string = "car_inventory.db";
  readonly table_name: string = "car_inventory_table";
  databaseObj: SQLiteObject;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private sqlite: SQLite,
    private router: Router,
    private statusBar: StatusBar) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.createDB();

      if (this.platform.is('android')) {
        this.statusBar.overlaysWebView(false);
      }
    }).catch(error => {
      console.log(error);
    });;
  }

  createDB() {
    this.sqlite.create({
      name: this.database_name,
      location: 'default'
    }).then((db: SQLiteObject) => {
      this.databaseObj = db;
      this.createTable();
      console.log('car_inventory Database Created!');
    }).catch(e => {
      console.log("Error while DB Creation: " + JSON.stringify(e));
    });
  }

  createTable() {
    this.databaseObj.executeSql(
      'CREATE TABLE IF NOT EXISTS ' + this.table_name + ' (Pid INTEGER PRIMARY KEY AUTOINCREMENT, ManufacturerName varchar(255), Model varchar(255), Color varchar(255), RegNumber varchar(255), ManufacturerYear varchar(255), Notes varchar(255))', [])
      .then(() => {
        console.log('Table Created!');
      })
      .catch(e => {
        console.log("error " + JSON.stringify(e));
      });
  }

  insertRow(manufacturer_name) {
    this.databaseObj.executeSql('INSERT INTO ' + this.table_name + ' (ManufacturerName) VALUES ("' + manufacturer_name + '")', []).then(() => {
      console.log('Row Inserted!');
      this.router.navigate(['/add-model']);
    }).catch(e => {
      console.log("error " + JSON.stringify(e));
    });
  }

  getManufacturerList() {
    return this.databaseObj.executeSql("SELECT ManufacturerName FROM " + this.table_name, []).then((res) => {
      let row_data = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          row_data.push(res.rows.item(i));
        }
        return row_data;
      }
    }).catch(e => {
      alert("error " + JSON.stringify(e));
    });
  }
}
