import {
    SafeAreaView,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import {styles} from "@/styles/screens/index.styles";
import {StatusBar} from "expo-status-bar";
import {Colors} from "@/styles";
import {Link} from "expo-router";
import {useFonts} from "expo-font";
import Feather from "@expo/vector-icons/Feather";

export default function Index() {

    const [fontsLoaded] = useFonts({
        'JetBrains-Bold': require('@/assets/fonts/JetBrains/JetBrainsMono-Bold.ttf'),
        'JetBrains-ExtraBold': require('@/assets/fonts/JetBrains/JetBrainsMono-ExtraBold.ttf'),
        'JetBrains-Regular': require('@/assets/fonts/JetBrains/JetBrainsMono-Regular.ttf'),
        'Inter-Regular': require('@/assets/fonts/Inter/Inter_18pt-Regular.ttf'),
        'Inter-ExtraBold': require('@/assets/fonts/Inter/Inter_24pt-ExtraBold.ttf'),
        'Inter-Bold': require('@/assets/fonts/Inter/Inter_24pt-Bold.ttf'),
    });

    if (!fontsLoaded) {
        return <View/>
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={Colors.primaryYellow} style={"dark"}/>

                <Text style = {styles.title}>Hello, adventurer</Text>
                <Text style = {styles.subtitle}>Ready to dive into the knowledge space?</Text>

                <View style = {styles.getStartedContainer}>
                    <Link href = "/(auth)/LoginScreen" asChild>
                        <TouchableOpacity style = {styles.getStartedButton}>
                            <Text style = {styles.getStartedButtonText}>Get Started</Text>
                            <Feather name="arrow-right-circle" size={30} style = {styles.icon}/>
                        </TouchableOpacity>
                    </Link>
                </View>

        </SafeAreaView>
    );
}

