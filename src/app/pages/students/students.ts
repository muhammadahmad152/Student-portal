import { Component } from '@angular/core';

type StudentCategory = 'Development' | 'Design' | 'Technology';
interface Student { name: string; category: StudentCategory; focus: string; initials: string; number: string; tone: string; }

@Component({
  selector: 'app-students',
  standalone: true,
  templateUrl: './students.html',
  styleUrl: './students.css',
})
export class Students {
  readonly students: Student[] = [
    { name: 'Ali', category: 'Development', focus: 'Web Development', initials: 'A', number: '01', tone: 'tone-coral' },
    { name: 'Ahmed', category: 'Design', focus: 'UI & Visual Design', initials: 'A', number: '02', tone: 'tone-lime' },
    { name: 'Sara', category: 'Technology', focus: 'Data & Technology', initials: 'S', number: '03', tone: 'tone-blue' },
    { name: 'Ayesha', category: 'Development', focus: 'Frontend Development', initials: 'A', number: '04', tone: 'tone-lilac' },
    { name: 'Usman', category: 'Technology', focus: 'Cyber Security', initials: 'U', number: '05', tone: 'tone-ink' },
  ];
  searchTerm = '';
  activeFilter = 'All';
  sortOrder = 'featured';
  readonly filters = ['All', 'Development', 'Design', 'Technology'];

  get filteredStudents(): Student[] {
    const query = this.searchTerm.trim().toLowerCase();
    const result = this.students.filter(student => {
      const matchesQuery = !query || `${student.name} ${student.category} ${student.focus}`.toLowerCase().includes(query);
      const matchesFilter = this.activeFilter === 'All' || student.category === this.activeFilter;
      return matchesQuery && matchesFilter;
    });
    if (this.sortOrder === 'az') return [...result].sort((a, b) => a.name.localeCompare(b.name));
    if (this.sortOrder === 'za') return [...result].sort((a, b) => b.name.localeCompare(a.name));
    return result;
  }

  setFilter(filter: string): void { this.activeFilter = filter; }
  clearSearch(): void { this.searchTerm = ''; this.activeFilter = 'All'; this.sortOrder = 'featured'; }
}
