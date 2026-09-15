import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../shared/scroll-reveal';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {}