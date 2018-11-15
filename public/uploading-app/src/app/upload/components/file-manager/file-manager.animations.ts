import { trigger, state, style, transition, animate } from '@angular/animations';


const commonTransition = transition('* <=> void', animate('1000ms ease-in-out'));

export const animations = {
  fadeInTrigger: trigger('fadeIn', [
    state('void', style({ 'opacity': 0 })),
    commonTransition
  ]),
  slideDownTrigger: trigger('slideDown', [
    state('void', style({ 'transform': 'translateY(-10%)' })),
    commonTransition
  ])
};
