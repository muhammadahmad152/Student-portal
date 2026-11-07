import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { FooterComponent } from './footer';

describe('FooterComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [FooterComponent], providers: [provideRouter([])] }).compileComponents();
  });
  it('shows a current year and author name', () => {
    const fixture = TestBed.createComponent(FooterComponent);
    expect(fixture.componentInstance.studentName).toBe('Muhammad Ahmad Khan');
    expect(fixture.componentInstance.currentYear).toBe(new Date().getFullYear());
  });
});
