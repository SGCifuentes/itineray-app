import React from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';
import { styles } from './styles';
const dot = require('../../assets/dot.png');
const greenDot = require('../../assets/dot-green.png');
const planeIcon = require('../../assets/plane.png');
const activityIcon = require('../../assets/adventure.png');
const foodIcon = require('../../assets/food.png');
const lodgingIcon = require('../../assets/sleeping.png');
const displacement = require('../../assets/displacement.png');
const recycleIcon = require('../../assets/recycle.png');

export default function Activity({
    title,
    subtitle,
    activity,
    startActivity,
    endActivity
}) {
    const hasBackground = !startActivity && title;
    const isGreenActivity = title === 'Actividad Verde';

    const getIcon = () => {
        if (activity?.split(' ')[0] === 'Vuelo') return planeIcon;
        if (activity?.split(' ')[0] === 'Almuerzo') return foodIcon;
        if (activity?.split(' ')[0] === 'Desplazamiento') return displacement;
        if (activity?.split(' ')[0] === 'Alojamiento') return lodgingIcon;
        if (endActivity) return planeIcon;
        if (isGreenActivity) return recycleIcon;
        if (hasBackground) return activityIcon;
        return '';
    };

    return (
        <View>
            <View
                style={[styles.lineHigh, !startActivity && styles.lineColor]}
            />
            <View
                style={[
                    styles.container,
                    hasBackground && styles.containerBackground,
                    isGreenActivity && styles.containerGreen
                ]}
            >
                <View style={{ width: '42%' }}>
                    {title && (
                        <Text
                            style={
                                startActivity ? styles.startTitle : styles.title
                            }
                        >
                            {title}
                        </Text>
                    )}
                    {subtitle && (
                        <Text style={styles.subtitle}>{subtitle}</Text>
                    )}
                </View>
                <View style={styles.dotsLine}>
                    <View
                        style={[
                            styles.line,
                            !hasBackground && !startActivity && styles.lineColor
                        ]}
                    />
                    <ImageBackground
                        style={styles.dot}
                        source={isGreenActivity ? greenDot : dot}
                    >
                        <Image style={styles.dotIcon} source={getIcon()} />
                    </ImageBackground>
                    <View
                        style={[
                            styles.line,
                            !hasBackground && !endActivity && styles.lineColor
                        ]}
                    />
                </View>
                <View style={{ width: '42%' }}>
                    <Text style={styles.activity}>{activity}</Text>
                </View>
            </View>
        </View>
    );
}
