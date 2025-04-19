import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export let fade = trigger('fade', [
  state('void', style({ opacity: 0 })),

  transition(':enter, :leave', [animate('.3s ease-in')]),
]);

export let fadeAndSlide = trigger('fadeAndSlide', [
  transition(':enter', [style({ opacity: 0 }), animate('.3s ease-in')]),
  transition(
    ':leave',
    animate(
      '.3s .3s ease-in-out',
      // style({ transform: 'translateX(-100%)' })
      keyframes([
        style({ offset: 0.2, opacity: 1, transform: 'translateX(20px)' }),
        style({ offset: 1, opacity: 0, transform: 'translateX(-2000px)' })
      ])
    )
  ),
]);
