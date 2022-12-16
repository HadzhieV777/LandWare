import { animate, query, stagger, style, transition, trigger } from "@angular/animations"

const enterTransition =  transition('* => *', [
    query('li', style({transform: 'translateX(-100%)'})),
    query('li', stagger('500ms',[
        animate('300ms', style({transform: ''}))
    ])),
  ])     

  
  export let listAnimation = trigger('listAnimation', [enterTransition])
  