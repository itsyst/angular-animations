import { animate, state, style, transition, trigger } from "@angular/animations";

export let fade = trigger('fadeIn', [
  state('void', style({ opacity: 0 })),

  transition(':enter, :leave', [animate('.3s ease-in')]),
]);
