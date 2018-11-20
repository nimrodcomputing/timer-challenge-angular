import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerComponent } from './timer.component';
import {FormsModule} from "@angular/forms";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('TimerComponent', () => {
  let component: TimerComponent;
  let fixture: ComponentFixture<TimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerComponent ],
        imports: [
            FormsModule,
            HttpClientTestingModule
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

    it('should forbid values below 121', () => {
        component.timer = 120;
        let valid = component.validateTimer();
        expect(valid).toBeFalsy();
        expect(component.validInput).toBeFalsy();
    });

    it('should allow values above 120', () => {
        component.timer = 121;
        let valid = component.validateTimer();
        expect(valid).toBeTruthy();
        expect(component.validInput).toBeTruthy();
    });
});
