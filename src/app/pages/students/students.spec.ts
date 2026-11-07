import { TestBed } from '@angular/core/testing';
import { Students } from './students';

describe('Students', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [Students] }).compileComponents();
  });
  it('shows the five featured students', () => {
    const fixture = TestBed.createComponent(Students);
    expect(fixture.componentInstance.students.length).toBe(5);
  });
  it('filters by category', () => {
    const fixture = TestBed.createComponent(Students);
    fixture.componentInstance.setFilter('Design');
    expect(fixture.componentInstance.filteredStudents.length).toBe(1);
    expect(fixture.componentInstance.filteredStudents[0].name).toBe('Ahmed');
  });
});
