import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../shared/scroll-reveal';

@Component({
  selector: 'app-projects',
  imports: [ScrollRevealDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {}