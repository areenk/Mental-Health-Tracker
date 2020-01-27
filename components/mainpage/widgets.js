import React from 'react';
import { StyleSheet, Text, View, Button, CheckBox } from 'react-native';
        
{/* do "$ npm install react-native-progress --save" to get progress bar */}
import * as Progress from 'react-native-progress';
 

export const WidgetContainer = () => {
    return (
        <Div>

            <Text>Water Intake</Text>
        <Button title="Solid Button"/>

        <Progress.Bar progress={0.3} width={200} />
        <View style={styles.container}>
        <Text style={styles.welcome}>Progress Example</Text>
        <Progress.Bar
          style={styles.progress}
          progress={this.state.progress}
          indeterminate={this.state.indeterminate}
        />
      </View>

        <CheckBox
            center
            title='Food Intake'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checked={this.state.checked}
        />

        <Text>Exercise</Text>
        <Button title="Solid Button"/>

        <Progress.Bar progress={0.3} width={200} />
        <View style={styles.container}>
        <Text style={styles.welcome}>Progress Example</Text>
        <Progress.Bar
          style={styles.progress}
          progress={this.state.progress}
          indeterminate={this.state.indeterminate}
        />
      </View>
        </Div>
    );
}

const Widget = () => {

}