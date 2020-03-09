import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableHighlight } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from "react-navigation";
import { Button, Icon, Footer, FooterTab } from 'native-base';
import { LeftPage, RightPage } from "../swipepages.js";

export default (MainScreenNavigator = createBottomTabNavigator(
    {
        LeftPage: { screen: LeftPage },
        RightPage: { screen: RightPage }
    },
    {
        tabBarPosition: "bottom",
        tabBarComponent: props => {
            return (
                <Footer>
                    <FooterTab>
                        <Button
                            vertical
                            active={props.navigationState.index === 0}
                            onPress={() => props.navigation.navigate("LucyChat")}>
                            <Icon name="bowtie" />
                            <Text>Lucy</Text>
                        </Button>
                        <Button
                            vertical
                            active={props.navigationState.index === 1}
                            onPress={() => props.navigation.navigate("JadeChat")}>
                            <Icon name="briefcase" />
                            <Text>Nine</Text>
                        </Button>
                        <Button
                            vertical
                            active={props.navigationState.index === 2}
                            onPress={() => props.navigation.navigate("NineChat")}>
                            <Icon name="headset" />
                            <Text>Jade</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            );
        }
    }
));