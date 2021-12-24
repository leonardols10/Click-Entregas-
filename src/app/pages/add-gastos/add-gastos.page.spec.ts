import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddGastosPage } from './add-gastos.page';

describe('AddGastosPage', () => {
  let component: AddGastosPage;
  let fixture: ComponentFixture<AddGastosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGastosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddGastosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
