import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SlackINPage } from './slack-in.page';

describe('SlackINPage', () => {
  let component: SlackINPage;
  let fixture: ComponentFixture<SlackINPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlackINPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SlackINPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
