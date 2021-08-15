import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import App from './src/Navigation/index';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import WrapForm from "./src/Component/WrapForm/WrapForm";
export default function Application() {
    return (
        //<Example1/>
        <App/>

    )
};
