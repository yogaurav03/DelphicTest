import {LayoutWrapper} from '@/components';
import React from 'react';
import {Text, View} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';

const Home = () => {
  return (
    <LayoutWrapper>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 20, color: 'black'}}>
          Basic project setup to start
        </Text>
        {/* <Icon name="chevron-left" size={20} /> */}
      </View>
    </LayoutWrapper>
  );
};

export default Home;
