import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddManufacturerPage } from './add-manufacturer.page';

describe('AddManufacturerPage', () => {
  let component: AddManufacturerPage;
  let fixture: ComponentFixture<AddManufacturerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddManufacturerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddManufacturerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
