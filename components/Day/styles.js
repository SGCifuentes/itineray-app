import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '50%',
        paddingTop: 15
    },
    borderLine: {
        borderLeftColor: '#FF6549',
        borderLeftWidth: 2,
        marginRight: 1
    },
    content: {
        display: 'flex',
        alignItems: 'flex-end',
        width: '80%',
        alignSelf: 'flex-end'
    },
    horizontalLine: {
        height: 1,
        width: '100%',
        backgroundColor: '#ED6F53',
        marginVertical: 10
    },
    text: {
        color: '#FF6549',
        fontFamily: 'Montserrat_700Bold',
        fontSize: 16,
        lineHeight: 16,
        fontWeight: 'bold'
    }
});
