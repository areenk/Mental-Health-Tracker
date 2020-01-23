import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import {MainPage} from "./components/mainpage/index.js";

export default function App() {
  return (
    <ViewPager style={styles.viewPager} initialPage={1} showPageIndicator={true}>
      <View style={styles.pageView} key="1">
        <Text>Left page</Text>
      </View>
      <View style={styles.pageView} key="2">
        <MainPage />
      </View>
      <View style={styles.pageView} key="3">
        <Text>Right page</Text>
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
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
