import { Component, HostListener } from '@angular/core';

import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';
import { Experience } from './components/experience/experience';
import { Projects } from './components/projects/projects';
import { Education } from './components/education/education';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    Navbar,
    Hero,
    About,
    Skills,
    Experience,
    Projects,
    Education,
    Contact,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  constructor() {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }

  @HostListener('window:beforeunload')
  onBeforeUnload(): void {
    window.scrollTo(0, 0);
  }
}