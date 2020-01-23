import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { WidgetContainer } from "./widgets.js"

export const MainPage = () => {
    return (
        <React.Fragment>
            <Text>Main page</Text>
            <WidgetContainer />
        </React.Fragment>
    );
}