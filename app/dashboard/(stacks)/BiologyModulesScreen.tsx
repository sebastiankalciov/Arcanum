import {ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback, View} from "react-native";
import {styles} from "@/styles/screens/PhysicsModulesScreen.styles";
import {useFonts} from "expo-font";
import {KContainer} from "@/components/KContainer";
import Feather from '@expo/vector-icons/Feather';
import {Link, useRouter} from "expo-router";
import {KModuleComponent} from "@/components/KModuleComponent";
import {KSpacer} from "@/components/KSpacer";

const descriptions = {
    "cell": "\n" +
        "View a detailed 3D model of a cell in augmented reality.\n\n" +
        "Explore its structure by looking around and reading informative text about the " +
        "different components, like the nucleus and mitochondria"

}

export default function BiologyModulesScreen() {

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


    return (
        <KContainer>
            <View style = {{flexDirection: "row", maxWidth: "90%", gap: "10%", alignItems: "center"}}>
                <TouchableOpacity>
                    <Link push href = "../(tabs)/HomeScreen">
                        <Feather name="arrow-left-circle" size={30} color="#000" />
                    </Link>
                </TouchableOpacity>
                <Text style = {styles.titleText}>Biology</Text>
            </View>
            <KSpacer size={10}/>
            <Text style = {styles.categoriesText}>Modules</Text>

            <Text style = {styles.subtitleText}>Press on a category to enter the AR world</Text>
            <KSpacer size={20}/>
            <View style = {styles.contentContainer}>

                <TouchableWithoutFeedback>
                    <Link href = "./(biology-scenes)/CellSceneScreen">
                        <KModuleComponent title={"Cell"} description={descriptions.cell}/>
                    </Link>
                </TouchableWithoutFeedback>

            </View>
        </KContainer>
    )
}