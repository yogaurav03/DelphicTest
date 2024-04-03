import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

const LayoutWrapper = ({children}) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: 'white',
  },
});

export default LayoutWrapper;
