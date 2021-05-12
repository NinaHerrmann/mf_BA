import React  from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ItemFullScreen from '../Screens/ItemFullScreen'

import Map from '../Screens/Map';


const Stack = createStackNavigator();


function KarteStack() {
   
    return (
      

        <Stack.Navigator>
            <Stack.Screen name="Karte" component={Map}/>
            <Stack.Screen name="ItemFullScreen" component={ItemFullScreen}/>

        </Stack.Navigator>
        
    );
    }

export default KarteStack;