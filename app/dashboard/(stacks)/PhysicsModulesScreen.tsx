import {Text, TouchableOpacity, TouchableWithoutFeedback, View} from "react-native";
import {styles} from "@/styles/screens/PhysicsModulesScreen.styles";
import {useFonts} from "expo-font";
import {KContainer} from "@/components/KContainer";
import Feather from '@expo/vector-icons/Feather';
import {Link, useRouter} from "expo-router";
import {KModuleComponent} from "@/components/KModuleComponent";
import {KSpacer} from "@/components/KSpacer";
export default function PhysicsModulesScreen() {

    const router = useRouter();

    const [fontsLoaded] = useFonts({
        'JetBrains-Bold': require('@/assets/fonts/JetBrains/JetBrainsMono-Bold.ttf'),
        'JetBrains-ExtraBold': require('@/assets/fonts/JetBrains/JetBrainsMono-ExtraBold.ttf'),
        'JetBrains-Regular': require('@/assets/fonts/JetBrains/JetBrainsMono-Regular.ttf'),
        'Inter-Regular': require('@/assets/fonts/Inter/Inter_18pt-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return <View/>
    }

    const openARScene = (page: string) => {
        router.push(`./${page}`);
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
            <KSpacer size={10}/>
            <Text style = {styles.categoriesText}>Modules</Text>
            <KSpacer size={20}/>
            <View style = {styles.contentContainer}>

                    <TouchableWithoutFeedback onPress={() => {router.push('./MainScreenScreen')}}>
                        <KModuleComponent title={"Newton's Laws of Motion"} description={"drop an apple\ndada\nunu"}/>
                    </TouchableWithoutFeedback>
                <KModuleComponent title={"Electric and Magnetic Fields"} description={"idk sum scientific shit"}/>
                <KModuleComponent title={"Wave Properties"} description={"crazy shit"}/>
            </View>
        </KContainer>
    )
}