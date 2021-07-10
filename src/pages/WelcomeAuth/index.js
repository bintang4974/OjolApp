import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../utils';
import ActionButton from './ActionButton';

const WelcomeAuth = () => {
    return (
        <View style={styles.pages}>
            <View style={styles.illustration} />
            <Text style={styles.title}>Selamat Datang di O-JOL</Text>
            <ActionButton
                desc="Silahkan masuk, jika anda sudah memiliki akun"
                title="Masuk"
            />
            <ActionButton
                desc="Atau silahkan daftar jika anda belum memiliki akun"
                title="Daftar"
            />
        </View>
    )
}

export default WelcomeAuth;

const styles = StyleSheet.create({
    pages: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        flex: 1,
    },
    illustration: {
        width: 219,
        height: 117,
        backgroundColor: colors.default,
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.default,
        marginBottom: 76,
    }
})
