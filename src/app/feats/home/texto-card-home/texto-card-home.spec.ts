import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TextoCardHome } from './texto-card-home';

describe('TextoCardHome', () => {
  let component: TextoCardHome;
  let fixture: ComponentFixture<TextoCardHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextoCardHome],
    }).compileComponents();

    fixture = TestBed.createComponent(TextoCardHome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
