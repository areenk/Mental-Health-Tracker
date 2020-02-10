import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, CheckBox, Alert, Animated, TouchableWithoutFeedback, AppRegistry } from 'react-native';

{/* do "$ npm install react-native-progress --save" to get progress bar */ }
import * as Progress from 'react-native-progress';


// used for increasing value of progress bar via button press
function incr() {
  var v1 = document.getElementById('p1').value;
  document.getElementById("p1").value = v1 + 10;

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }

  const [progress, setProgress] = useState(0);
  useInterval(() => {
    if(progress < 100) {
      setProgress(progress + 25);
    }
  }, 1000);
}

export const WidgetContainer = () => {
  return (
    <View style={styles.viewContainer}>

      {/* <Progress value="50" max="100" id="p1"><Text>50%</Text></Progress>
      <Button title="Increase" onPress={() => incr()} /> 
      
      //Something in this block is causing a problem, need to figure out what it is*/}


      <Widget name="Water Intake"/>
      

      {/* <CheckBox
        center
        title='Food Intake'
        checkedIcon='dot-circle-o'
        uncheckedIcon='circle-o'
        checked={this.state.checked}
      /> */}

      <Widget name="Exercise" />
      
      {/* <View style={styles.container}>
      <Text>Exercise</Text>
      <Button title="Button" />
      <Progress.Bar progress={0.3} width={200} />
        <Text style={styles.welcome}>Progress Example</Text>
        {/* <Progress.Bar
          style={styles.progress}
          progress={this.state.progress}
          indeterminate={this.state.indeterminate}
        /> */}
      {/*</View> */}
    </View>
  );
}

const Widget = (props) => {
  return(
    <View style={styles.container}>
        <Text>{props.name}</Text>
        <Button title="Increase" 
        color="#f194ff"
        onPress={() => Alert.alert('Simple Button pressed')}/>
        {/* //progress bar gets rendered from props
        //use diff variables per progress bar */}
        <Progress.Bar progress={0.5} width={200} />
        <Text style={styles.welcome}>Progress Example</Text>

        {/* <Button title="Increase" onPress='incr();'/> */}
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
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  welcome: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});