import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TocContentComponent } from './toc-content.component';

describe('TocContentComponent', () => {
  let component: TocContentComponent;
  let fixture: ComponentFixture<TocContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TocContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TocContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
