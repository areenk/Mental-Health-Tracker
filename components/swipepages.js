import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Linking } from 'react-native';

const onPressHelp = () => {
    alert("Seeking help now");
}

const onPressCall = () => {
    Linking.openURL("tel:2402370639");
}

export const LeftPage = () => {
    return (
        <React.Fragment>
            <Text>Press the button for help.</Text>
            <TouchableHighlight onPress={() => onPressHelp()} underlayColor="white">
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Help!</Text>
                </View>
            </TouchableHighlight>
        </React.Fragment>
    );
}

export const RightPage = () => {
    return (
        <React.Fragment>
            <Text>Press the button to call emergency line.</Text>
            <TouchableHighlight onPress={() => onPressCall()} underlayColor="white">
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Call!</Text>
                </View>
            </TouchableHighlight>
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    button: {
        marginBottom: 0,
        width: 260,
        height: 200,
        justifyContent: 'center', //Centered vertically
        alignItems: 'center', // Centered horizontally
        backgroundColor: '#2196F3'
    },
    buttonText: {
        padding: 20,
        color: 'white',
        fontSize: 30
    }
})