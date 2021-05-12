import React  from 'react';
import { HomeProps } from '../Types/ScreenTypes';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen'
import FoodGuide from '../Screens/SubHomeScreens/FoodGuide';
import ShoppingGuide from '../Screens/SubHomeScreens/ShoppingGuide';
import Events from '../Screens/SubHomeScreens/Events';
import Engagement from '../Screens/SubHomeScreens/Engagement';
import ItemFullScreen from '../Screens/ItemFullScreen';

const Stack = createStackNavigator();

//  Home ist Haupt-Screen
// alle anderen Screens sind aus dem HomeStack ansteuerbar 
function HomeStack({navigation, route}:HomeProps) {
    
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="FoodGuide" component={FoodGuide}/>
            <Stack.Screen name="ShoppingGuide" component={ShoppingGuide}/>
            <Stack.Screen name="Events" component={Events}/>
            <Stack.Screen name="Engagement" component={Engagement}/>
            <Stack.Screen name="ItemFullScreen" component={ItemFullScreen}/>
        </Stack.Navigator>
    );
    }

export default HomeStack;