import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '../../components';
import { colors } from '../../utils';

const ActionButton = ({ desc, title }) => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.desc}>{desc}</Text>
            <Button title={title} />
        </View>
    )
}

export default ActionButton;

const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 43,
        maxWidth: 225
    },
    desc: {
        fontSize: 10,
        color: colors.text.default,
        textAlign: 'center',
        paddingHorizontal: '15%',
        marginBottom: 6,
    }
})