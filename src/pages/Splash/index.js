import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('WelcomeAuth');
        }, 2000);
    }, [])
    return (
        <View>
            <Text>Splash Screen</Text>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({})
