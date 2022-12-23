import { Component, OnInit } from '@angular/core';
import { bounceIn } from 'src/app/shared/animations/bounce';

@Component({
  selector: 'app-benefits-section',
  templateUrl: './benefits-section.component.html',
  styleUrls: ['./benefits-section.component.scss'],
  animations: [bounceIn]
})
export class BenefitsSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
