import { Component, OnInit } from '@angular/core';
import { pageAnimations } from 'src/app/shared/animations/single-el-animations';

@Component({
  selector: 'app-services-section',
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.scss'],
  animations: [pageAnimations]
})
export class ServicesSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
