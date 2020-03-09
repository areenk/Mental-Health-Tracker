import React from 'react';
import {StyleSheet, Text, View, ScrollView, Image, TouchableHighlight} from 'react-native';
import { WidgetContainer } from "./widgets.js";
import { createDrawerNavigator } from 'react-navigation-drawer';
import { NavigationContainer } from 'react-navigation';
import { Button, Icon, Footer, FooterTab } from 'native-base';
import {LeftPage, RightPage} from "../swipepages.js"

/** npm install @react-navigation/drawer */

export const MainPage = () => {

    const Drawer = createDrawerNavigator();

    let navigationOptions = {
        drawerLabel: 'My Health Profile'
    };

    let onPress = () => {
        navigation.toggleDrawer();
    };


    return (
        <React.Fragment>

            <NavigationContainer>
                <Drawer.Navigator initialRouteName="Home">
                    <Drawer.Screen name= "Home" component={MainPage} />
                    <Drawer.Screen name= "Profile" component={MainPage} />
                    <Drawer.Screen name= "Feedback" component={LeftPage} />
                    <Drawer.Screen name= "Emergency" component={RightPage} />
                    <Drawer.Screen name= "Stats" component={MainPage} />
                    <Drawer.Screen name= "Settings" component={MainPage} />
                </Drawer.Navigator>
            </NavigationContainer>
*/

            <View style = { styles.header}>
                <TouchableHighlight style={styles.button} onPress={navigation.toggleDrawer()}>
                    <Image source={require('../assets/menu_icon.png')}
                           style={styles.menu_icon}
                    />
                </TouchableHighlight>
                <Text style={styles.header_text}>Wellness Tracker</Text>
            </View>

            <Text style = {styles.quote}>"Here's a rotating inspirational quote to brighten up your day!" - Team CAB</Text>
            <WidgetContainer />

            <Footer>
                <FooterTab>

                    <Button vertical onPress = {()  => this.props.navigation.navigate(LeftPage())} title={"left"}>
                        <Text>
                            Left Page
                        </Text>
                    </Button>
                    <Button vertical onPress = {()  => this.props.navigation.navigate(RightPage())} title={"right"}>
                        <Text>
                            Right Page
                        </Text>
                    </Button>

                </FooterTab>
            </Footer>

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