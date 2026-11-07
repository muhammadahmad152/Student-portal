import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  readonly highlights = [
    { number: '01', title: 'Find your people', description: 'Meet the students who make your campus feel like a community.', tag: 'CONNECTION', symbol: '◎', route: '/students' },
    { number: '02', title: 'Know your institute', description: 'Get familiar with the place where your next chapter takes shape.', tag: 'DISCOVERY', symbol: '✳', route: '/about' },
    { number: '03', title: 'Keep moving forward', description: 'Stay curious, practise often, and turn small steps into progress.', tag: 'GROWTH', symbol: '↗', route: '/about' },
  ];
}
