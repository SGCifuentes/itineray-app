import React from 'react';
import { Linking, StyleSheet, Text } from 'react-native';

export default function Link({ url, linkText }) {
    return (
        <Text onPress={() => Linking.openURL(url)} style={styles.link}>
            {linkText}
        </Text>
    );
}

const styles = StyleSheet.create({
    link: {
        textDecorationLine: 'underline',
        fontWeight: '600',
        fontSize: 15
    }
});
