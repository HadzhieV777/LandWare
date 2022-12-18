import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';

const enterTransition = transition(':enter', [
  query('li', [
    style({ opacity: 0, transform: 'translateY(-100px)' }),
    stagger('400ms', [
      animate(
        '1000ms cubic-bezier(0.35, 0, 0.25, 1)',
        style({ opacity: 1, transform: 'none' })
      ),
    ]),
  ]),
]);

export let pageAnimations = trigger('pageAnimations', [
  enterTransition,
]);


