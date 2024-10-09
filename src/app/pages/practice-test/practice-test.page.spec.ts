import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PracticeTestPage } from './practice-test.page';

describe('PracticeTestPage', () => {
  let component: PracticeTestPage;
  let fixture: ComponentFixture<PracticeTestPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
