import { roll } from "..";

describe('Index', () => {
  it('tests something', () => {
    expect(roll('1d20')).toEqual('I rolled a dice: 1d20. Outcome grim');
  })
});
