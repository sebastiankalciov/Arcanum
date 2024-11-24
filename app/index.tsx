import {Text, View} from "react-native";
import {useState} from "react";
import {styles} from "@/styles/screens/index.styles";
import {StatusBar} from "expo-status-bar";
import {Colors} from "@/styles";

export default function Index() {
    
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={Colors.background} />
        </View>
    );
}
