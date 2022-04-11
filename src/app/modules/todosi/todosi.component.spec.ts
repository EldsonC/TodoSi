import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosiComponent } from './todosi.component';

describe('TodosiComponent', () => {
  let component: TodosiComponent;
  let fixture: ComponentFixture<TodosiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
