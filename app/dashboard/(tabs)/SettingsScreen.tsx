import {SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import {styles} from "@/styles/screens/HomeScreen.styles";
import {StatusBar} from "expo-status-bar";
import {Colors} from "@/styles";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import {useFonts} from "expo-font";
import Ionicons from '@expo/vector-icons/Ionicons';
import {KSubjectComponent} from "@/components/KSubjectComponent";

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

    return (
        <View style = {styles.container}>
            <TouchableOpacity>
                <Text>Log out</Text>
            </TouchableOpacity>
            <StatusBar backgroundColor={Colors.background} />
        </View>
    )
}