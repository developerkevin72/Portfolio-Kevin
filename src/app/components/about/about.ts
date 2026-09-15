import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../shared/scroll-reveal';

@Component({
  selector: 'app-about',
  imports: [ScrollRevealDirective],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {}