import React from 'react';
import { Image, Text, View } from 'react-native';
import Link from '../../components/Link';
import { styles } from './styles';
const whatsappIcon = require('../../assets/whatsapp.png');
const websiteIcon = require('../../assets/cursor.png');
const emailIcon = require('../../assets/mail.png');
const acoturLogo = require('../../assets/acotur-logo.png');
const logo = require('../../assets/logo-dark.png');

export default function Footer() {
    const email = 'travelbuddy@wondertravel.co';
    const web = 'www.wondertravel.co';
    const whatsappNumber = '123456789012';
    const whatsappMessage = 'Hola';
    return (
        <>
            <View style={styles.container}>
                <View style={styles.brandContainer}>
                    <Image style={styles.brandLogo} source={logo} />
                    <View style={styles.verticalLine}></View>
                    <View styles={styles.brandHashtag}>
                        <Text>#ViajaAlMomento</Text>
                    </View>
                </View>

                <View>
                    <Text style={styles.reservationTitle}>
                        Reserva tus viajes
                    </Text>

                    <View>
                        <View style={styles.contactLinkContainer}>
                            <Image style={styles.icon} source={whatsappIcon} />
                            <Text>
                                <Link
                                    linkText='Whatsapp'
                                    url={`whatsapp://send?text=${whatsappMessage}&phone=${whatsappNumber}`}
                                />{' '}
                                Reservas e info.
                            </Text>
                        </View>
                        <View style={styles.contactLinkContainer}>
                            <Image style={styles.icon} source={websiteIcon} />
                            <Link url={`https://${web}`} linkText={web} />
                        </View>
                        <View style={styles.contactLinkContainer}>
                            <Image style={styles.icon} source={emailIcon} />
                            <Link url={`mailto:${email}`} linkText={email} />
                        </View>
                    </View>
                </View>

                <View style={styles.acoturMember}>
                    <Text style={styles.acoturMemberText}>Miembros de:</Text>
                    <Image source={acoturLogo} />
                </View>
            </View>
            <View style={styles.copyright}>
                <Text style={{ color: 'white', paddingVertical: 10 }}>
                    © Copyright Wonder Travel
                </Text>
            </View>
        </>
    );
}
