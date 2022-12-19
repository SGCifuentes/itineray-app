import { StyleSheet } from 'react-native';

export const base = StyleSheet.create({
    fontParagraph: {
        fontFamily: 'Montserrat_400Regular',
        color: '#FDFCF7',
        fontSize: 12
    },
    centerFlex: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1C1F'
    },
    logo: {
        alignSelf: 'center',
        width: 241,
        height: 82,
        marginTop: 200,
        marginBottom: 100
    },
    linearGradient: { padding: 40 },
    main: {
        flex: 1,
        ...base.centerFlex,
        borderColor: 'red'
    },
    destinationName: {
        fontSize: 38,
        color: '#FDFCF7',
        textAlign: 'center',
        fontFamily: 'AbrilFatface_400Regular',
        lineHeight: 38
    },
    horizontalLine: {
        height: 2,
        width: '60%',
        backgroundColor: '#F2EDED',
        marginVertical: 20
    },
    destinationDescription: {
        ...base.fontParagraph,
        textAlign: 'center',
        width: '80%',
        marginVertical: 10
    },
    durationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '70%',
        borderColor: '#F8F5F5',
        borderWidth: 2,
        borderRadius: 4,
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginTop: 20
    },
    destinationText: {
        marginLeft: 15,
        fontFamily: 'Montserrat_700Bold',
        color: '#FDFCF7',
        fontSize: 14,
        fontWeight: 'bold'
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    locationText: {
        ...base.fontParagraph,
        marginLeft: 10
    },
    additionalServicesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '65%',
        marginVertical: 20
    },
    additionalServices: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        width: '45%'
    },
    additionalServicesText: {
        ...base.fontParagraph,
        fontSize: 10,
        marginLeft: 10
    },

    reservationContainer: {
        ...base.centerFlex,
        marginVertical: 20,
        width: '100%',
        marginBottom: 40
    },
    touchableElement: {
        width: '80%',
        marginVertical: 10
    },
    whatsappButton: {
        ...base.centerFlex,
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
