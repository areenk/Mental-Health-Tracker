import React, { Component, useState } from 'react';
import { StyleSheet, Text, TouchableHighlight} from 'react-native';

export const Quote = () => {
    const quotes = [
        `"Never forget how far you've come! Let's be positive today!"`,
        `"Quotes!"`,
        `"Please work!"`,
        `"Yey!"`
    ]
    const [index, setIndex] = useState(0);

    const changeText = () => {
        setIndex((index + 1)%quotes.length);
    }

    return(
        <Text style={styles.quote} onPress={()=>changeText()}>
            {quotes[index]}
        </Text>
    );
}

const styles = StyleSheet.create({
    quote: {
        marginHorizontal: 20,
        padding: 10,
        flex: 1,
        justifyContent: 'center',
        fontStyle: 'italic'
    }
});