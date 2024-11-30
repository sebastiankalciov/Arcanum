import {StyleSheet, View} from "react-native";
import {Colors} from "@/styles";
import {StatusBar} from "expo-status-bar";

// @ts-ignore
export const KContainer = ({children}) => {
    return (
        <View style = {styles.container}>
            {children}

            <StatusBar backgroundColor={Colors.primaryDark} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        padding: 20,
        gap: 20,
        backgroundColor: Colors.primaryDark,
        fontFamily: 'JetBrains-Regular',
    }
})