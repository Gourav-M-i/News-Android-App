import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from './Home';
import Language from './Language';
import { SafeAreaView } from 'react-native-safe-area-context';
const Tab = createMaterialTopTabNavigator()
const AllNews = (props) => {
    return (
        <>
            <View style={styles.newsapp}>
                <Image source={require('../assets/logo.png')} style={styles.logo} />
                <Text style={styles.txt}>NEWSAPP</Text>
            </View>
            <TouchableOpacity onPress={() => props.navigation.navigate('Saved')}><Text style={styles.saved}>Saved</Text></TouchableOpacity>
            <View style={styles.lang} >
                <Language />
            </View>
            <Tab.Navigator>
                <Tab.Screen name="General" component={Home} />
                <Tab.Screen name="Health" component={Home} />
                <Tab.Screen name="Sports" component={Home} />
                <Tab.Screen name="Business" component={Home} />
            </Tab.Navigator>

        </>
    )
}
const styles = StyleSheet.create({
    newsapp:
    {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: '#faa41a',
        fontSize: 25
    },
    saved:
    {
        position: 'absolute',
        top: 15,
        right: 20
    },
    logo:
    {
        width: 50,
        height: 50,
        resizeMode: 'contain'
    },
    txt:
    {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black'
    },
    lang:
    {
        marginVertical: 10,
        zIndex: 1
    }
})

export default AllNews

