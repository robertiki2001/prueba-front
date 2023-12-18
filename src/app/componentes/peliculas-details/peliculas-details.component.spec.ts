import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasDetailsComponent } from './peliculas-details.component';

describe('PeliculasDetailsComponent', () => {
  let component: PeliculasDetailsComponent;
  let fixture: ComponentFixture<PeliculasDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeliculasDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeliculasDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
