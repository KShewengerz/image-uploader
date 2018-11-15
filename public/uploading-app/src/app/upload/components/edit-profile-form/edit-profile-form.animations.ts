import { animate, state, style, transition, trigger } from '@angular/animations';


export const animations = {
  slideDownTrigger: trigger('slideDown', [
    state('void', style({ 'transform': 'translateY(-5%)' })),
    transition('* <=> void', animate('1000ms ease-in-out'))
  ])
};
