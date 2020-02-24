import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export const WidgetPlaceholder = () => {
  return (
    <View style={styles.viewContainer}>
      <Text style={styles.label}>Water Intake</Text>
      <Image source={require(`../assets/water_cups.png`)}
        style={styles.image} />
      <Text style={styles.label}>Sleep</Text>
      <Image source={require('../assets/other_chart.png')}
        style={styles.image} />
      <Text style={styles.label}>Mood</Text>
      <Image source={require('../assets/mood_chart.png')}
        style={styles.image} />
    </View>
  );
}


const styles = StyleSheet.create({
  viewContainer: {
    flex: 15
  },
  container: {
    flex: 1,
    marginLeft: 10,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  label: {
    fontSize: 20,
    paddingLeft: 20
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
    margin: 5,
    marginBottom: 40,
    height: 100,
    width: 340,
    resizeMode: 'contain'
  }
});