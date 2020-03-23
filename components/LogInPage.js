import React from 'react';
import {Linking, StyleSheet, Text, TextInput, TouchableHighlight, View} from "react-native";


const onPressLogIn = () => {

};
const onPressSignUp = () => {

};

export const LogInPage = () => {
    return (
        <React.Fragment>
            <Text style={styles.headerText}>Please Log In</Text>
            <Text style= {styles.labelText}>Username</Text>
            <TextInput style = {styles.input}/>
            <Text style= {styles.labelText}>Password </Text>
            <TextInput style = {styles.input}/>
            <TouchableHighlight style = {styles.highlight} underlayColor="#fff9e0" onPress={() => onPressLogIn()}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Log In</Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight style = {styles.highlight} underlayColor="#fff9e0" onPress={() => onPressSignUp()}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>New Account</Text>
                </View>
            </TouchableHighlight>
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    highlight: {
        paddingLeft: 10,
        height: 50,
        paddingBottom: 70,
        paddingTop: 10
    },
    headerText: {
        fontSize: 25,
        marginBottom: 15,
        paddingTop: 50,
        paddingLeft: 10,
        fontWeight: 'bold'
    },
    labelText: {
        fontSize: 15,
        paddingLeft: 10
    },
    button: {
        marginBottom: 0,
        width: 150,
        height: 50,
        justifyContent: 'center', //Centered vertically
        alignItems: 'center', // Centered horizontally
        backgroundColor: '#7a42f4'
    },
    buttonText: {
        color: 'white',
        fontSize: 15
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
    }
})