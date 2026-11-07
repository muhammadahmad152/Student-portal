import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  readonly values = [
    { number: '01', icon: '⌘', title: 'Think boldly', text: 'Ask questions, explore possibilities, and approach problems from a fresh angle.' },
    { number: '02', icon: '✳', title: 'Learn by doing', text: 'Build practical confidence through projects, practice, and steady improvement.' },
    { number: '03', icon: '↗', title: 'Grow together', text: 'Share ideas, support one another, and celebrate progress as a community.' },
  ];
}
