import { animate, state, style, transition, trigger } from "@angular/animations";

const enterTransition =  transition(':enter', [
  style({
    opacity: 0,
  }),
  animate('1.5s ease-in', style({opacity: 1})),
])     

const exitTransition = transition(':leave', [
  style({opacity: 1}),
  animate('1s ease-out', style({opacity: 0}))
])

export let fadeIn = trigger('fadeIn', [enterTransition])
export let fadeOut = trigger('fadeOut', [exitTransition])