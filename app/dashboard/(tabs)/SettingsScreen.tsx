import {Alert, Text, TouchableOpacity, View} from "react-native";
import {useFonts} from "expo-font";
import {KContainer} from "@/components/KContainer";
import {Colors} from "@/styles";

export default function SettingsScreen() {

    const [fontsLoaded] = useFonts({
        'JetBrains-Bold': require('@/assets/fonts/JetBrains/JetBrainsMono-Bold.ttf'),
        'JetBrains-ExtraBold': require('@/assets/fonts/JetBrains/JetBrainsMono-ExtraBold.ttf'),
        'JetBrains-Regular': require('@/assets/fonts/JetBrains/JetBrainsMono-Regular.ttf'),
        'Inter-Regular': require('@/assets/fonts/Inter/Inter_18pt-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return <View/>
    }

    const logOut = () => {
        Alert.alert("Log out", "Are you sure you want log out?")
    }
    return (
        <KContainer>
            <TouchableOpacity onPress={logOut}>
                <Text style = {{color: Colors.white}}>Log out</Text>
            </TouchableOpacity>

        </KContainer>
    )
}