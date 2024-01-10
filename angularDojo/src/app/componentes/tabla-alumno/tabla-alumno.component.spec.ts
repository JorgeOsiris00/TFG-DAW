import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaAlumnoComponent } from './tabla-alumno.component';

describe('TablaAlumnoComponent', () => {
  let component: TablaAlumnoComponent;
  let fixture: ComponentFixture<TablaAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaAlumnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
