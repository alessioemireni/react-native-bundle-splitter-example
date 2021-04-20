import * as React from 'react';
import {View} from 'react-native';

const MyComponent = React.forwardRef((props, ref) => {

    React.useImperativeHandle(ref, () => ({
      logging: () => {
        console.log("CLICKED!!!");
      },
    }));

    return (
        <View>
            {/* // My component */}
        </View>
    );
})

export default MyComponent;