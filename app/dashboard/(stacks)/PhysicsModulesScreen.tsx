import {ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback, View} from "react-native";
import {styles} from "@/styles/screens/PhysicsModulesScreen.styles";
import {useFonts} from "expo-font";
import {KContainer} from "@/components/KContainer";
import Feather from '@expo/vector-icons/Feather';
import {Link, useRouter} from "expo-router";
import {KModuleComponent} from "@/components/KModuleComponent";
import {KSpacer} from "@/components/KSpacer";

const descriptions = {
    "gravity": "\n" +
        "Learn the basics of gravity! Explore how objects fall," +
        "understand gravitational force, and try an interactive simulation to see gravity in action",
    "electrics": "\n" +
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
        "Nunc et iaculis urna. In nec ligula ut arcu faucibus consequat at eu ligula.",
    "wave": "\n" +
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
        "Nunc et iaculis urna. In nec ligula ut arcu faucibus consequat at eu ligula."

}
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

            <Text style = {styles.subtitleText}>Press on a category to enter the AR world</Text>
            <KSpacer size={20}/>
            <View style = {styles.contentContainer}>

                <TouchableWithoutFeedback>
                    <Link href = "./(physics-scenes)/GravitySceneScreen">
                        <KModuleComponent title={"Gravity"} description={descriptions.gravity}/>
                    </Link>
                </TouchableWithoutFeedback>


                <TouchableOpacity>
                    <Link href = "./MainSceneScreen">
                        <KModuleComponent title={"Electric and Magnetic Fields"} description={descriptions.electrics}/>
                    </Link>
                </TouchableOpacity>


                <TouchableWithoutFeedback>
                    <Link href = "./MainSceneScreen">
                        <KModuleComponent title={"Wave Properties"} description={descriptions.wave}/>
                    </Link>
                </TouchableWithoutFeedback>

            </View>
        </KContainer>
    )
}