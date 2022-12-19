import {
    AbrilFatface_400Regular,
    useFonts as useAbrilFont
} from '@expo-google-fonts/abril-fatface';
import {
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_400Regular_Italic,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    useFonts as useMontserratFonts
} from '@expo-google-fonts/montserrat';
import { LinearGradient } from 'expo-linear-gradient';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useRef } from 'react';
import {
    Dimensions,
    Image,
    ImageBackground,
    ScrollView,
    Text,
    TouchableHighlight,
    View
} from 'react-native';
import ContactButton from './components/ContactButton';
import Footer from './containers/Footer';
import Itinerary from './containers/Itinerary';
import { base, styles } from './styles';
const backgroundImage = require('./assets/cerro-pajarito.jpg');
const wonderLogo = require('./assets/wonder-icon.png');
const logo = require('./assets/logo.png');

const mapIcon = require('./assets/map.png');
const adventureIcon = require('./assets/adventure.png');
const foodIcon = require('./assets/food.png');
const hutIcon = require('./assets/hut.png');
const offRoadIcon = require('./assets/off-road.png');
const arrowUpIcon = require('./assets/arrow-up.png');

export default function App() {
    const [AbrilFontsLoaded] = useAbrilFont({
        AbrilFatface_400Regular
    });
    const scroll = useRef();
    const windowHeight = Dimensions.get('window').height;

    let [montserratFontsLoaded] = useMontserratFonts({
        Montserrat_300Light,
        Montserrat_400Regular,
        Montserrat_600SemiBold,
        Montserrat_700Bold,
        Montserrat_400Regular_Italic
    });

    const onLayoutRootView = useCallback(async () => {
        if (AbrilFontsLoaded && montserratFontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [AbrilFontsLoaded, montserratFontsLoaded]);

    if (!AbrilFontsLoaded || !montserratFontsLoaded) {
        return null;
    }

    return (
        <ScrollView
            onLayout={onLayoutRootView}
            style={styles.container}
            ref={(ref) => {
                scroll.current = ref;
            }}
        >
            <ImageBackground
                resizeMode='stretch'
                style={styles.imageBackground}
                source={backgroundImage}
            >
                <LinearGradient
                    colors={[
                        'rgba(26, 28, 31, 1)',
                        'rgba(26, 28, 31, 0)',
                        'rgba(26, 28, 31, 0)',
                        'rgba(26, 28, 31, 0)'
                    ]}
                >
                    <Image style={styles.logo} source={logo} />
                    <LinearGradient
                        style={styles.linearGradient}
                        colors={[
                            'rgba(26, 28, 31, 0.07)',
                            'rgba(26, 28, 31, 0.85)',
                            'rgba(26, 28, 31, 1)',
                            'rgba(26, 28, 31, 1)'
                        ]}
                    >
                        <View style={styles.main}>
                            <Text style={styles.destinationName}>
                                Guainía y Cerros de Mavicure
                            </Text>
                            <View style={styles.horizontalLine}></View>
                            <Text style={styles.destinationDescription}>
                                Viaje por los Cerros de Mavicure y sus
                                alrededores
                            </Text>
                            <View style={styles.durationContainer}>
                                <Image source={wonderLogo} />
                                <Text style={styles.destinationText}>
                                    4 días, 3 noches
                                </Text>
                            </View>
                        </View>
                    </LinearGradient>
                </LinearGradient>
            </ImageBackground>

            <View style={base.centerFlex}>
                <View style={styles.locationContainer}>
                    <Image source={mapIcon} />
                    <Text style={styles.locationText}>
                        Orinoquía (Guainía, Colombia)
                    </Text>
                </View>
                <View style={styles.additionalServicesContainer}>
                    <View style={styles.additionalServices}>
                        <Image source={adventureIcon} />
                        <Text style={styles.additionalServicesText}>
                            Experiencias cautivantes
                        </Text>
                    </View>
                    <View style={styles.additionalServices}>
                        <Image source={foodIcon} />
                        <Text style={styles.additionalServicesText}>
                            Todas las comidas incluidas
                        </Text>
                    </View>
                    <View style={styles.additionalServices}>
                        <Image source={hutIcon} />
                        <Text style={styles.additionalServicesText}>
                            Alojamientos {'\n'}únicos
                        </Text>
                    </View>
                    <View style={styles.additionalServices}>
                        <Image source={offRoadIcon} />
                        <Text style={styles.additionalServicesText}>
                            Transporte terrestre y fluvial en el Guainía
                        </Text>
                    </View>
                </View>

                <View style={styles.reservationContainer}>
                    <Text style={base.fontParagraph}>Whatsapp:</Text>

                    <ContactButton />

                    <TouchableHighlight
                        onPress={() => {
                            if (scroll) {
                                scroll.current.scrollTo({
                                    y: windowHeight * 1.33
                                });
                            }
                        }}
                    >
                        <Image source={arrowUpIcon} />
                    </TouchableHighlight>
                </View>
            </View>
            <Itinerary />
            <Footer />
            <StatusBar style='auto' />
        </ScrollView>
    );
}
