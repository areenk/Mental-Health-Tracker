import React, { Component } from 'react';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit'
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


//Daily Chart shows X:time Y:mood-value
//weekly chart shows Y:average-mood-value X:date-in-week
//Is there a way to show X:date, Y:time, color of input dot [0~10]????
const line = {
  labels: ['2/23', '2/24', '2/25', '2/26', '2/27', '2/28', '2/29'],
  datasets: [
    {
      data: [7, 2, 5, 4, 5, 8, 6],
      strokeWidth: 2, // optional
    },
  ],
};

//make another line graph for recorded sleep hours
const line = {
  labels: ['2/23', '2/24', '2/25', '2/26', '2/27', '2/28', '2/29'],
  datasets: [
    {
      data: [7, 6, 5, 8, 4, 5, 9],
      strokeWidth: 2, // optional
    },
  ],
};

// Pie chart will be used to show balance between positive, negative, and neutral moods
const pieData = [
  {
    name: 'Positive',
    population: 40, //derive from number of positive inputs 7-10. no need to find percentages- the piechart will do it for you
    color: 'rgba(131, 167, 234, 1)',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Negative',
    population: 35,
    color: '#F00',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Netural',
    population: 25,
    color: 'rgb(0, 0, 255)',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
];

<PieChart
      data={pieData}
      width={screenWidth}
      height={220}
      chartConfig={chartConfig}
      accessor="population"
      backgroundColor="transparent"
      paddingLeft="15"
      absolute
    />


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