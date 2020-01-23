import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ViewPager from '@react-native-community/viewpager';

export default function App() {
  return (
    <ViewPager style={styles.viewPager} initialPage={1}>
      <View style={styles.pageView} key="1">
        <Text>First page</Text>
      </View>
      <View style={styles.pageView} key="2">
        <Text>Second page</Text>
      </View>
      <View style={styles.pageView} key="3">
        <Text>Third page</Text>
      </View>
    </ViewPager>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewPager: {
    flex: 1
  },
  pageView: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});
