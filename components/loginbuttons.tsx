import React from 'react';
import { Button, Icon } from '@ui-kitten/components';

const GoogleIcon = (props:any) => (
  <Icon name='google' {...props} />
);

export const LoginButton = () => (
  <Button accessoryLeft={GoogleIcon}>Login with Facebook</Button>
);