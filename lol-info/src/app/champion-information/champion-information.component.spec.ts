import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionInformationComponent } from './champion-information.component';

describe('ChampionInformationComponent', () => {
  let component: ChampionInformationComponent;
  let fixture: ComponentFixture<ChampionInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampionInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
