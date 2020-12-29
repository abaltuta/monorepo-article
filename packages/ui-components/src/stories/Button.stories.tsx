import React from 'react';
import { Story, Meta } from '@storybook/react';

import { MonorepoButton, MonorepoButtonProps } from '../Button';

export default {
  title: 'Basics/Button',
  component: MonorepoButton,
  argTypes: {
    roll: { control: 'boolean' },
  },
} as Meta;

const Template: Story<MonorepoButtonProps> = (args) => <MonorepoButton {...args} />;

export const Label = Template.bind({});
Label.args = {
  label: 'Button',
  roll: true
};
