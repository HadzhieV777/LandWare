import { Component, OnInit } from '@angular/core';
import { bounceIn } from 'src/app/shared/animations/bounce';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
  animations: [bounceIn]
})
export class HeroSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
