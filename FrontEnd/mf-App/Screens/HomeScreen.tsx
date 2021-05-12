import React  from 'react';
import { View, Button, Appearance} from 'react-native';

import { HomeProps } from '../Types/ScreenTypes';
import styles from '../Styles/ViewStyles'

// Vier Boxen die vier verschiedene Seiten aufrufen (siehe SubHomeScreen - Ordner)
function HomeScreen({navigation}:HomeProps) {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <View style= {styles.inner}>
                    <Button
                        title="Food Guide"
                        // onPress= {()=> navigation.navigate('FoodGuide', {navigation:navigation})}
                        onPress= {()=> navigation.navigate('FoodGuide')}
                    />
                </View>
            </View>
            <View style={styles.box}>
                <View style= {styles.inner}>
                    <Button
                        title="Shopping Guide"
                        onPress= {()=> navigation.navigate('ShoppingGuide')}
                    />
                </View>
            </View>

            <View style={styles.box}>
                <View style= {styles.inner}>
                    <Button
                        title="Events & Aktionen"
                        onPress= {()=> navigation.navigate('Events')}
                    />
                </View>
            </View>
             <View style={styles.box}>
                    <View style= {styles.inner}>
                        <Button
                            title="Engagement"
                            onPress= {()=> navigation.navigate('Engagement')}
                        />
                    </View>
            </View>
           
        </View>
    );
    }

export default HomeScreen;