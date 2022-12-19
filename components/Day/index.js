import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

export default function Day({ day }) {
    return (
        <View style={[day !== 1 && styles.borderLine, styles.container]}>
            <View style={styles.content}>
                <View style={styles.horizontalLine}></View>
                <Text style={styles.text}>Día {day}</Text>
            </View>
        </View>
    );
}
