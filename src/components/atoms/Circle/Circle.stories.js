import React from 'react';
import { storiesOf } from '@storybook/react';
import { Circle, CircleSpan } from './Circle';

storiesOf('Atoms/Circle', module)
  .add('Normal', () => (
    <Circle>
      <CircleSpan header>50,00 zł</CircleSpan>
      <CircleSpan>Kwiecień 2019</CircleSpan>
    </Circle>
  ))
  .add('Small', () => (
    <Circle small>
      <CircleSpan header small>
        50,00 zł
      </CircleSpan>
      <CircleSpan small>Kwiecień 2019</CircleSpan>
    </Circle>
  ));
