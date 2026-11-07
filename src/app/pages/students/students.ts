
import { Component } from '@angular/core';

type StudentCategory = 'Development' | 'Design' | 'Technology';

type StudentFilter = 'All' | StudentCategory;
type StudentSort = 'featured' | 'az' | 'za';

interface Student {
  name: string;
  category: StudentCategory;
  focus: string;
  initials: string;
  number: string;
  tone: string;
}

@Component({
  selector: 'app-students',
  standalone: true,
  templateUrl: './students.html',
  styleUrl: './students.css',
})

export class Students {

  readonly students: Student[] = [
    {
      name: 'Muhammad Ahmad',
      category: 'Development',
      focus: 'Cyber Security & AI Developer',
      initials: 'M',
      number: '01',
      tone: 'tone-coral'
    },
    {
      name: 'Talha Nizam',
      category: 'Design',
      focus: 'UI & Visual Design',
      initials: 'T',
      number: '02',
      tone: 'tone-lime'
    },
    {
      name: 'Sara Khan',
      category: 'Technology',
      focus: 'Data & Technology',
      initials: 'S',
      number: '03',
      tone: 'tone-blue'
    },
    {
      name: 'Bilal Ahmed',
      category: 'Development',
      focus: 'Frontend Development',
      initials: 'B',
      number: '04',
      tone: 'tone-lilac'
    },
    {
      name: 'Usman Raza',
      category: 'Technology',
      focus: 'Web Development',
      initials: 'U',
      number: '05',
      tone: 'tone-ink'
    }
  ];

  searchTerm = '';

  activeFilter: StudentFilter = 'All';

  sortOrder: StudentSort = 'featured';

  readonly filters: StudentFilter[] = [
    'All',
    'Development',
    'Design',
    'Technology'
  ];

  get filteredStudents(): Student[] {

    const query = this.searchTerm.trim().toLowerCase();

    const result = this.students.filter(student => {

      const searchableText =
        `${student.name} ${student.category} ${student.focus}`
          .toLowerCase();

      const matchesQuery =
        !query || searchableText.includes(query);

      const matchesFilter =
        this.activeFilter === 'All' ||
        student.category === this.activeFilter;

      return matchesQuery && matchesFilter;
    });

    if (this.sortOrder === 'az') {

      return [...result].sort((a, b) =>
        a.name.localeCompare(b.name)
      );

    }

    if (this.sortOrder === 'za') {

      return [...result].sort((a, b) =>
        b.name.localeCompare(a.name)
      );

    }

    return result;
  }

  setFilter(filter: StudentFilter): void {

    this.activeFilter = filter;

  }

  setSortOrder(value: string): void {

    if (
      value === 'featured' ||
      value === 'az' ||
      value === 'za'
    ) {

      this.sortOrder = value;

    }

  }

  clearSearch(): void {

    this.searchTerm = '';

    this.activeFilter = 'All';

    this.sortOrder = 'featured';

  }

}
