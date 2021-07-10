import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../../../utils';

const Button = ({ title }) => {
    return (
        <View>
            <TouchableOpacity style={styles.wrapper}>
                <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Button

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: colors.default,
        borderRadius: 25,
        paddingVertical: 13,
    },
    title: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'white',
        textTransform: 'uppercase',
        textAlign: 'center',
    }
})
