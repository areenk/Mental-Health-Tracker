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
import { AsyncStorage } from 'react-native';

// used for increasing value of progress bar via button press
function incr() {
  var v1 = document.getElementById('p1').value;
  document.getElementById("p1").value = v1 + 10;
  /**
    IncrementItem = () => {
      this.setState({ clicks: this.state.clicks + 1 });
    }
   */

  const [progress, setProgress] = useState(0);
  useInterval(() => {
    if (progress < 100) {
      setProgress(progress + 25);
    }
  }, 1000);
}

class WidgetContainer extends React.Component {

  render() {
    return (
      <View style={styles.viewContainer}>

        <Widget name="Water Intake" />

        <Widget name="Exercise" />

      </View>
    );
  }
}

class Widget extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      progress: 0
    };
    //await AsyncStorage.setItemAsync('key', 0);
  }

  incr() {
    this.setState({
      ...this.state,
      progress: this.state.progress + 0.1
    });
    AsyncStorage.setItem('key', this.state.progress);
  }


  componentWillMount() {
    let key = AsyncStorage.getItem('key');
    if (key == null) {
      key = 0;
      AsyncStorage.setItem('key', key);
    }
    this.setState({
      ...this.state,
      progress: key
    });
  }  

  render() {
    console.log(this.state.progress);
    return (
      <View style={styles.container}>
        <Text>{this.props.name}</Text>
        <Button title="Increase"
          color="#f194ff"
          onPress={this.incr.bind(this)} />
        {/* //progress bar gets rendered from props
        //use diff variables per progress bar */}
        <Progress.Bar progress={this.state.progress} width={200} />
        <Text style={styles.welcome}>Progress Example</Text>

        {/* <Button title="Increase" onPress='incr();'/> */}
      </View>
    );
  }
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
const line2 = {
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

/**
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
 */


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
  welcome: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default WidgetContainer;