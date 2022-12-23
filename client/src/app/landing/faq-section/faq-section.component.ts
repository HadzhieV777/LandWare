import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { fadeIn, fadeOut } from 'src/app/shared/animations/fade-animations';
import { Faq } from 'src/app/shared/models/faq.model';
import { FaqService } from 'src/app/shared/services/faq.service';

@Component({
  selector: 'app-faq-section',
  templateUrl: './faq-section.component.html',
  styleUrls: ['./faq-section.component.scss'],
  animations: [fadeIn, fadeOut],
})
export class FaqSectionComponent {
  faqArray?: Faq[];

  constructor(
    // private authService: AuthService,
    private faqService: FaqService
  ) {}

  ngOnInit(): void {
    this.retrieveFaq();
  }

  retrieveFaq(): void {
    this.faqService
      .getAll()
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((e) => ({
            ...(e.payload.doc.data() as Faq),
            id: e.payload.doc.id,
          }))
        )
      )
      .subscribe((data) => {
        this.faqArray = data;
      });
  }

  showHiddenData(index: number) {
    if (this.faqArray && this.faqArray[index]) {
      this.faqArray[index].hideData = !this.faqArray[index].hideData;
    }
  }
}
