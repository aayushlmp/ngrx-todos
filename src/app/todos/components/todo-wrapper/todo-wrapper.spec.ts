import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoWrapper } from './todo-wrapper';

describe('TodoWrapper', () => {
  let component: TodoWrapper;
  let fixture: ComponentFixture<TodoWrapper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoWrapper]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoWrapper);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
