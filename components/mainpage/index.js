import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { WidgetContainer } from "./widgets.js";

export const MainPage = () => {
    return (
        <React.Fragment>
            <View style = { styles.header}>
            <Image source={require('../assets/menu_icon.png')}
                style={styles.menu_icon}
            />
            <Text style={styles.header_text}>Wellness Tracker</Text>
            </View>
            <Text style = {styles.quote}>"Here's a rotating inspirational quote to brighten up your day!" - Team CAB</Text>
            <WidgetContainer />
        </React.Fragment>
    );
};

const styles = StyleSheet.create({
    header:{
        flexDirection : 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flex: 1,
        paddingTop: 30,
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
        fontSize: 25
    },
    quote: {
        paddingRight: 15,
        paddingLeft: 15,
        flex: 1,
        fontStyle: 'italic'
    }
});