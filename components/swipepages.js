import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

const _onPressButton = () => {
    alert("Navigating to the whatever");
}

export const LeftPage = () => {
    return (
        <React.Fragment>
            <Text>This is the left page.</Text>
            <TouchableHighlight onPress={() => _onPressButton()} underlayColor="white">
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
            <Text>This is the right page.</Text>
            <TouchableHighlight onPress={() => _onPressButton()} underlayColor="white">
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
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },
    buttonText: {
        textAlign: 'center',
        padding: 20,
        color: 'white'
    }
})