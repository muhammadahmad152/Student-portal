import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { NavbarComponent } from './navbar';

describe('NavbarComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [NavbarComponent], providers: [provideRouter([])] }).compileComponents();
  });
  it('toggles the mobile menu', () => {
    const fixture = TestBed.createComponent(NavbarComponent);
    expect(fixture.componentInstance.menuOpen).toBe(false);
    fixture.componentInstance.toggleMenu();
    expect(fixture.componentInstance.menuOpen).toBe(true);
    fixture.componentInstance.closeMenu();
    expect(fixture.componentInstance.menuOpen).toBe(false);
  });
});
