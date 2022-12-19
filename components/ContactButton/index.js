import {
    View,
    Text,
    TouchableHighlight,
    Image,
    StyleSheet,
    Linking
} from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

export default function ContactButton() {
    const whatsappUrl = 'whatsapp://send?text=hello&phone=1234567891';

    return (
        <TouchableHighlight
            style={styles.touchableElement}
            onPress={() => Linking.openURL(whatsappUrl)}
        >
            <LinearGradient
                colors={['#FF805A', '#FF6348']}
                style={{
                    borderRadius: 8
                }}
            >
                <View style={styles.whatsappButton}>
                    <Image source={require('../../assets/whatsapp.png')} />
                    <Text style={styles.whatsappButtonText}>
                        Reservar / información
                    </Text>
                </View>
            </LinearGradient>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    touchableElement: {
        width: '70%',
        marginTop: 10,
        marginBottom: 20
    },
    whatsappButton: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 20,
        backgroundColor: 'transparent',
        shadowColor: '#FF6348B9',
        shadowRadius: 8,
        elevation: 40
    },
    whatsappButtonText: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: 18,
        color: '#FFFFFF',
        marginLeft: 12,
        fontWeight: 'bold'
    }
});
