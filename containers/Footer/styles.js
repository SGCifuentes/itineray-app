import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#FDFCF7',
        paddingHorizontal: '10%'
    },
    brandContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    brandLogo: {
        width: 145,
        height: 80
    },
    verticalLine: {
        height: '50%',
        width: 1,
        backgroundColor: '#FF694C',
        marginHorizontal: 20
    },
    brandHashtag: {
        borderColor: 'red',
        borderWidth: 1
    },
    reservationTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginVertical: 10
    },
    contactLinkContainer: {
        flexDirection: 'row',
        fontSize: 16,
        marginVertical: 10,
        alignItems: 'center'
    },
    icon: {
        width: 16,
        height: 15,
        marginRight: 10
    },
    acoturMember: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 15
    },
    acoturMemberText: {
        fontSize: 18,
        textDecorationLine: 'underline',
        color: '#2D3136'
    },
    copyright: {
        backgroundColor: '#272A2E',
        alignItems: 'center'
    }
});
