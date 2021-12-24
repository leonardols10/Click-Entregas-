import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExpedicaoPage } from './expedicao.page';

describe('ExpedicaoPage', () => {
  let component: ExpedicaoPage;
  let fixture: ComponentFixture<ExpedicaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpedicaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExpedicaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
