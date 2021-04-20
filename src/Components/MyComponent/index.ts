import React from 'react';
import {register} from 'react-native-bundle-splitter';

// IT DOES NOT WORK
export default register({
  loader: () => import('./MyComponent'),
});

// export {default} from './MyComponent'; // IT WORKS