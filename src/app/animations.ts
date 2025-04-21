import {
  animate,
  animation,
  keyframes,
  state,
  style,
  transition,
  trigger,
  useAnimation,
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
        style({ offset: 1, opacity: 0, transform: 'translateX(-2000px)' }),
      ])
    )
  ),
]);

export let fadeInAnimation = animation(
  [style({ opacity: 0 }), animate('{{duration}} {{ easing}}')],
  { params: { duration: '2s', easing: 'ease-out' } }
);

export let bounceOutLeftAnimation = animation(
  animate(
    '.3s .3s ease-in-out',
    // style({ transform: 'translateX(-100%)' })
    keyframes([
      style({ offset: 0.2, opacity: 1, transform: 'translateX(20px)' }),
      style({ offset: 1, opacity: 0, transform: 'translateX(-100%)' }),
    ])
  )
);

export let todoAnimation = trigger('todoAnimation', [
  transition(':enter',
    [
      useAnimation(fadeInAnimation, { params: { duration: '500ms', easing: 'ease-out' } }),
    ]
  ),
  transition(':leave', [
    style({ backgroundColor: 'red' }),
    animate(1000),
    useAnimation(bounceOutLeftAnimation),
  ]),
]);
