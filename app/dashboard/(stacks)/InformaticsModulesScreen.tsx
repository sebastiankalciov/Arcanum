import {ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback, View} from "react-native";
import {styles} from "@/styles/screens/PhysicsModulesScreen.styles";
import {useFonts} from "expo-font";
import {KContainer} from "@/components/KContainer";
import Feather from '@expo/vector-icons/Feather';
import {Link, useRouter} from "expo-router";
import {KModuleComponent} from "@/components/KModuleComponent";
import {KSpacer} from "@/components/KSpacer";

const descriptions = {
    // implement let's say 5 blocks with lights and the user can click on them, and form
    // binary numbers, and see their equivalent
    "binary": "\n" +
        "See how binary numbers work"

    // or data structures, like stack and queue
    // pop and push operations

}
export default function InformaticsModulesScreen() {

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
                <Text style = {styles.titleText}>Informatics</Text>
            </View>
            <KSpacer size={10}/>
            <Text style = {styles.categoriesText}>Modules</Text>

            <Text style = {styles.subtitleText}>Press on a category to enter the AR world</Text>
            <KSpacer size={20}/>
            <View style = {styles.contentContainer}>

                <TouchableWithoutFeedback>
                    <Link href = "./(informatics-scenes)/BinarySceneScreen">
                        <KModuleComponent title={"Binary numbers"} description={descriptions.binary}/>
                    </Link>
                </TouchableWithoutFeedback>

            </View>
        </KContainer>
    )
}