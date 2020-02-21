import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddModelPage } from './add-model.page';

describe('AddModelPage', () => {
  let component: AddModelPage;
  let fixture: ComponentFixture<AddModelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddModelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddModelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
