/* eslint-disable @typescript-eslint/no-explicit-any */
import { roll } from '@monorepo/diceroll';

document.getElementById('result')!.innerHTML = roll('1d20');

if (process.env.NODE_ENV !== 'production') {
  if ((<any>module).hot) {
    (<any>module).hot.accept();
  }
}
