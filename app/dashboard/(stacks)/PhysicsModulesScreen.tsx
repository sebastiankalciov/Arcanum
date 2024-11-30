import {Text, TouchableOpacity, View} from "react-native";
import {styles} from "@/styles/screens/PhysicsModulesScreen.styles";
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
            <View style = {{flexDirection: "row", maxWidth: "90%", gap: "30%", alignItems: "center"}}>
                <TouchableOpacity>
                    <Link push href = "../(tabs)/HomeScreen">
                        <Feather name="arrow-left-circle" size={30} color="white" />
                    </Link>
                </TouchableOpacity>
                <Text style = {styles.titleText}>Physics</Text>
            </View>
            <Text style = {styles.categoriesText}>Modules</Text>
            <View style = {styles.contentContainer}>
                <View style = {styles.moduleContainer}>
                    <View style = {styles.progressPhysicsContainer}>
                        <Text style = {styles.moduleTitle}>Newton's Laws of Motion</Text>
                        <Text style = {styles.moduleText}>drop an apple</Text>
                    </View>
                </View>
                <View style = {styles.moduleContainer}>
                    <View style = {styles.progressPhysicsContainer}>
                        <Text style = {styles.moduleTitle}>Electric and Magnetic Fields</Text>
                        <Text style = {styles.moduleText}>idk sum scientific shit</Text>

                    </View>
                </View>

                <View style = {styles.moduleContainer}>
                    <View style = {styles.progressPhysicsContainer}>
                        <Text style = {styles.moduleTitle}>Wave Properties</Text>
                        <Text style = {styles.moduleText}>crazy shit</Text>
                    </View>
                </View>

            </View>
        </KContainer>
    )
}