import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsintroComponent } from './skillsintro.component';

describe('SkillsintroComponent', () => {
  let component: SkillsintroComponent;
  let fixture: ComponentFixture<SkillsintroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsintroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkillsintroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
