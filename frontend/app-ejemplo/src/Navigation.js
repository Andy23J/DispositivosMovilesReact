import React from "react";
import {View, Text} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Menu from "./componentes/home/Menu";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import ListComponent from "./componentes/list/List";
import User from './screen/User'
import Chat from "./screen/Chat";
import Pdf from "./screen/Pdf";

const Tab = createBottomTabNavigator()

const Navigation = () => {
    return (
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name="Home" component={Menu} options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name="home" color={'#B7E2C6'} size={size}/>
                )
            }}/>
            <Tab.Screen name={'List'} component={ListComponent} options={{
                tabBarLabel: 'Listado',
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name={'clipboard-list'} color={'#B7DAE2'} size={size}/>
                )
            }}/>
            <Tab.Screen name={'nombre'} component={User} options={{
                tabBarLabel: 'Nombre',
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name={'account'} color={'blue'} size={size}/>
                )
            }}/>
            <Tab.Screen name={'openIA'} component={Chat} options={{
                tabBarLabel: 'openIA',
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name={'brain'} color={'green'} size={size}/>
                )
            }}/>
            <Tab.Screen name={'pdf'} component={Pdf} options={{
                tabBarLabel: 'pdf',
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name={'file-pdf-box'} color={'red'} size={size}/>
                )
            }}/>
        </Tab.Navigator>
    )
}

export default Navigation