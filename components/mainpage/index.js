import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { WidgetContainer } from "./widgets.js";
import { WidgetPlaceholder } from './widgetPlaceholder.js';

export const MainPage = () => {
    return (
        <React.Fragment>
            <View style={styles.header}>
                <Image source={require('../assets/menu_icon.png')}
                    style={styles.menu_icon}
                />
                <Text style={styles.header_text}>HealthyU</Text>
            </View>
            <Text style={styles.quote}>"Never forget how far you've come! Let's be positive today!"</Text>
            {/* <WidgetContainer /> */}
            <WidgetPlaceholder />
        </React.Fragment>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flex: 1,
        paddingTop: 20,
        paddingLeft: 10
    },
    menu_icon: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'row',
        padding: 10,
        margin: 5,
        height: 35,
        width: 35
    },
    header_text: {
        fontWeight: 'bold',
        fontSize: 25,
        marginTop: 5,
        marginLeft: 10
    },
    quote: {
        padding: 15,
        flex: 1,
        justifyContent: 'center',
        fontStyle: 'italic'
    }
});