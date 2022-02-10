import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

export default {
    title: 'Button',
    component: Button,
};

// eslint-disable-next-line react/jsx-filename-extension
export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const Emoji = () => (
    <Button onClick={action('clicked')}>
        <span role='img' aria-label='so cool'>
            😀 😎 👍 💯
        </span>
    </Button>
);