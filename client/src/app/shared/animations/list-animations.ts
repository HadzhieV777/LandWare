import { animate, query, stagger, style, transition, trigger } from "@angular/animations"

const enterTransition =  transition('* => *', [
    query('li', style({transform: 'translateX(-100%)'})),
    query('li', stagger('900ms',[
        animate('200ms', style({transform: ''}))
    ])),
  ])     

  
  export let listAnimation = trigger('listAnimation', [enterTransition])
  