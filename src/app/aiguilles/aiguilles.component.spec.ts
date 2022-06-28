import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiguillesComponent } from './aiguilles.component';

describe('AiguillesComponent', () => {
  let component: AiguillesComponent;
  let fixture: ComponentFixture<AiguillesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AiguillesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiguillesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
