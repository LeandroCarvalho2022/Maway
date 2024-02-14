import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EbenezerComponent } from './ebenezer.component';

describe('EbenezerComponent', () => {
  let component: EbenezerComponent;
  let fixture: ComponentFixture<EbenezerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EbenezerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EbenezerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
