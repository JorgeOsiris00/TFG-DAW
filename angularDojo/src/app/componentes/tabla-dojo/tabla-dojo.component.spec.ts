import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaDojoComponent } from './tabla-dojo.component';

describe('TablaDojoComponent', () => {
  let component: TablaDojoComponent;
  let fixture: ComponentFixture<TablaDojoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaDojoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaDojoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
