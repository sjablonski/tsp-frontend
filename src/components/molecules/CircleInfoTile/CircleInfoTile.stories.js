import React from 'react';
import { storiesOf } from '@storybook/react';
import CircleInfoTile from './CircleInfoTile';

storiesOf('molecules/CircleInfoTile', module)
  .add('Normal', () => <CircleInfoTile header="50,00 zł" description="Kwiecień 2019" />)
  .add('Small', () => <CircleInfoTile small header="50,00 zł" description="Kwiecień 2019" />);
