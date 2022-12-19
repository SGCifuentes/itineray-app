import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    containerBackground: {
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#000000',
        shadowOffset: {
            width: 2,
            height: -3
        },
        elevation: 8
    },
    containerGreen: {
        borderColor: '#188038',
        borderWidth: 2
    },
    startTitle: {
        textAlign: 'right'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 15
    },
    subtitle: {
        fontSize: 11
    },
    activity: {
        fontSize: 11
    },
    dotsLine: {
        flex: 1,
        width: 20,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    dot: {
        height: 20,
        width: 20,
        justifyContent: 'center',
        alignItems: 'center',
        tintColor: 'blue'
    },
    dotIcon: {
        width: 10
    },
    line: {
        width: 2,
        height: '50%'
    },
    lineColor: {
        backgroundColor: '#FF6549'
    },
    lineHigh: { width: 2, height: 15, alignSelf: 'center' }
});
