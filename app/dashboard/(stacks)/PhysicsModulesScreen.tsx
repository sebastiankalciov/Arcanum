import {Text, View} from "react-native";
import {styles} from "@/styles/screens/HomeScreen.styles";
import {useFonts} from "expo-font";
import {KContainer} from "@/components/KContainer";

export default function PhysicsModulesScreen() {

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
        <KContainer>
            <Text style = {styles.categoriesText}>Featured modules</Text>

        </KContainer>
    )
}