import {
    Montserrat_400Regular,
    Montserrat_700Bold,
    useFonts as useMontserratFonts
} from '@expo-google-fonts/montserrat';
import React, { useCallback, useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import Activity from '../../components/Activity';
import Day from '../../components/Day';
import itinerary from '../../itinerary.json';
import { styles } from './styles';
import * as SplashScreen from 'expo-splash-screen';

export default function Itinerary() {
    const [data] = useState(itinerary.data);

    let [montserratFontsLoaded] = useMontserratFonts({
        Montserrat_400Regular,
        Montserrat_700Bold
    });

    const onLayoutRootView = useCallback(async () => {
        if (montserratFontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [montserratFontsLoaded]);

    if (!montserratFontsLoaded) {
        return null;
    }
    return (
        <ScrollView onLayout={onLayoutRootView} style={styles.container}>
            <Text style={styles.itineraryTitle}>
                Wonder Travel es la plataforma que conecta viajeros con
                anfitriones en lugares mágicos de Colombia
            </Text>
            <Image
                style={styles.itineraryImage}
                source={require('../../assets/itinerary.png')}
            />
            <Image
                style={{ alignSelf: 'center' }}
                source={require('../../assets/adventure-figure.png')}
            />
            <View style={styles.crossingContainer}>
                <Text style={styles.crossingTitle}>La travesía:</Text>
                <View style={styles.flexCenter}>
                    <Text style={styles.crossingText}>Wonder Travel</Text>
                    <Image
                        style={styles.wonderIcon}
                        source={require('../../assets/icon.png')}
                    />
                </View>
            </View>

            <View>
                {data.map((day, index) => (
                    <View key={('day-', index + 1)}>
                        <Day day={index + 1} />
                        {index === 0 && (
                            <Activity
                                title={
                                    <Text style={styles.startText}>Inicio</Text>
                                }
                                activity='Ciudad de Origen'
                                startActivity={true}
                            />
                        )}
                        {day.map((activity) => (
                            <Activity key={activity.activity} {...activity} />
                        ))}
                    </View>
                ))}

                <Activity endActivity={true} />
                <Text style={{ textAlign: 'center' }}>
                    Regreso a {'\n'} ciudad de origen
                </Text>
            </View>
            <View style={styles.horizontalLine}></View>
        </ScrollView>
    );
}
