import React from 'react';
import { StyleSheet, Text, View, Button, CheckBox } from 'react-native';

{/* do "$ npm install react-native-progress --save" to get progress bar */ }
import * as Progress from 'react-native-progress';


// used for increasing value of progress bar via button press
function incr() {
  var v1 = document.getElementById('p1').value;
  document.getElementById("p1").value = v1 + 10;
}

export const WidgetContainer = () => {
  return (
    <View>

      <Text>Water Intake</Text>
      <Button title="Solid Button" />


      <Progress value="50" max="100" id="p1"><Text>50%</Text></Progress>
      <Button title='Increase' onPress='incr();' />


      <Progress.Bar progress={0.3} width={200} />
      <View style={styles.container}>
        <Text style={styles.welcome}>Progress Example</Text>
        {/* <Progress.Bar
          style={styles.progress}
          progress={this.state.progress}
          indeterminate={this.state.indeterminate}
        /> */}
      </View>

      {/* <CheckBox
        center
        title='Food Intake'
        checkedIcon='dot-circle-o'
        uncheckedIcon='circle-o'
        checked={this.state.checked}
      /> */}

      <Text>Exercise</Text>
      <Button title="Solid Button" />

      <Progress.Bar progress={0.3} width={200} />
      <View style={styles.container}>
        <Text style={styles.welcome}>Progress Example</Text>
        {/* <Progress.Bar
          style={styles.progress}
          progress={this.state.progress}
          indeterminate={this.state.indeterminate}
        /> */}
      </View>
    </View>
  );
}

const Widget = () => {

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});