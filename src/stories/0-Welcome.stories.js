import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';

export default {
    title: 'Welcome',
    component: Welcome,
};

// eslint-disable-next-line react/jsx-filename-extension
export const ToStorybook = () => <Welcome showApp={linkTo('Button')} />;

ToStorybook.story = {
    name: 'to Storybook',
};
