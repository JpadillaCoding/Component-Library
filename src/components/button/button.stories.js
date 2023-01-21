import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './button';

storiesOf('Button', module)
    .add('Primary', () => <Button 
    label="Do Something" 
    type="primary"
    size="large"
    />)
    .add('Danger', () => <Button 
    label="Do Something"
    type="danger"
    size="small"
    />)
    .add('success', () => <Button 
    label="Do Something"
    type="success"
    size=""
    />)
    .add('warning', ()=> <Button 
    label="Do Something"
    type='warning'
    size=""
    />)
    .add('default', () => <Button 
    label="Do Something"
    type=""
    size=""
    />)