import {Text, TouchableOpacity, View} from "react-native";
import {styles} from "@/styles/screens/HomeScreen.styles";
import {useFonts} from "expo-font";
import {KContainer} from "@/components/KContainer";
import Feather from '@expo/vector-icons/Feather';
import {Link} from "expo-router";
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
            <TouchableOpacity>
                <Link push href = "../(tabs)/HomeScreen">
                    <Feather name="arrow-left-circle" size={30} color="white" />
                </Link>

            </TouchableOpacity>
            <Text style = {styles.categoriesText}>Featured modules</Text>

        </KContainer>
    )
}