import React from 'react';

import { roll } from '@monorepo/diceroll';
import { MonorepoButton } from '@monorepo/ui-components';

export const App = (): JSX.Element => {
  return (
    <div>
      {roll('1d20')}
      <MonorepoButton label="test" />
    </div>
  )
}
