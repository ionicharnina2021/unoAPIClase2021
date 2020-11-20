import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlertandoPage } from './alertando.page';

describe('AlertandoPage', () => {
  let component: AlertandoPage;
  let fixture: ComponentFixture<AlertandoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertandoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlertandoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
