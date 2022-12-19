import { StyleSheet } from 'react-native';

const base = StyleSheet.create({
    flexCenter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export const styles = StyleSheet.create({
    ...base,
    container: {
        flex: 1,
        backgroundColor: '#FDFCF7',
        padding: 30
    },
    itineraryTitle: {
        textAlign: 'center',
        fontFamily: 'Montserrat_700Bold',
        fontWeight: 'bold',
        fontSize: 13,
        color: '#2D3136'
    },
    itineraryImage: {
        width: '95%',
        height: 100,
        alignSelf: 'center',
        marginVertical: 20
    },
    crossingContainer: {
        ...base.flexCenter,
        flex: 1,
        justifyContent: 'space-between',
        marginVertical: 20,
        paddingTop: 10
    },
    crossingTitle: {
        fontFamily: 'Montserrat_700Bold',
        fontWeight: 'bold',
        fontSize: 21,
        lineHeight: 21,
        color: '#2D3136'
    },
    crossingText: {
        fontFamily: 'Montserrat_400Regular',
        fontWeight: '400',
        fontSize: 11,
        color: '#2D3136',
        marginRight: 5
    },
    wonderIcon: { height: 12, width: 12 },
    horizontalLine: {
        height: 1,
        width: '100%',
        backgroundColor: '#C6C6C6',
        marginTop: 40
    },
    endActivityText: {
        fontFamily: 'Montserrat_400Regular',
        fontWeight: '400',
        color: '#2D3136',
        fontSize: 15
    }
});
