import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import {MainPage} from "./components/mainpage/index.js";
import {LeftPage, RightPage} from "./components/swipepages.js"
import{LogInPage} from "./components/LogInPage.js"

export default function App() {
  return (
    <ViewPager style={styles.viewPager} initialPage={1} showPageIndicator={true}>
      <View style={styles.pageView} key="1">
        <LeftPage />
      </View>
      <View style={styles.container} key="2">
        <MainPage />
      </View>
      <View style={styles.pageView} key="3">
        <RightPage />
      </View>
        <View style={styles.container} key="4">
            <LogInPage />
        </View>
    </ViewPager>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff9e0'
  },
  viewPager: {
    flex: 1
  },
  pageView: {
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
