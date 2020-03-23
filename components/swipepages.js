import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Linking } from 'react-native';

const onPressHelp = () => {
    alert("Seeking help now...");
}

const onPressCall = (url) => {
    Linking.openURL(url);
}

export const LeftPage = () => {
    return (
        <React.Fragment>
            <Text style={styles.labelText}>Press press the button for help.</Text>
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
            <Text style={styles.labelText}>Press the button to call emergency line.</Text>
            <TouchableHighlight onPress={() => onPressCall("tel:7038879298")} underlayColor="white">
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Call!</Text>
                </View>
            </TouchableHighlight>
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    labelText: {
        fontSize: 15,
        marginBottom: 15
    },
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