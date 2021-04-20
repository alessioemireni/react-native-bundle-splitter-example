import * as React from 'react';
import {View, Text, Button} from 'react-native';

import MyComponent from '../Components/MyComponent'

function wait(ms: number) {
  const start = new Date().getTime();
  let end = start;

  while (end < start + ms) {
    end = new Date().getTime();
  }
}

wait(5000);

function DetailsScreen() {

  const myComponentRef = React.useRef(null);

  const onClick = () => {
    if(myComponentRef.current) {
      myComponentRef.current.logging();
    }
  }

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button
        title="Press me"
        onPress={onClick}
      />
      <MyComponent ref={myComponentRef}/>
    </View>
  );
}

export default DetailsScreen;
