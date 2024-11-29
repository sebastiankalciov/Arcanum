import {SafeAreaView, Text, TouchableOpacity, TouchableWithoutFeedback, View} from "react-native";
import {styles} from "@/styles/screens/HomeScreen.styles";
import {StatusBar} from "expo-status-bar";
import {Colors} from "@/styles";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import {useFonts} from "expo-font";
import Ionicons from '@expo/vector-icons/Ionicons';
import {KSubjectComponent} from "@/components/KSubjectComponent";
import {Link} from "expo-router";

export default function HomeScreen() {

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
            <View style = {styles.textWithIconContainer}>
                <Text style = {styles.titleText}>Good day, adventurer</Text>
                <MaterialIcons name="waving-hand" size={24} color="#a66cfc" />
            </View>

            <Text style = {styles.subtitleText}>Ready for a new challenge?</Text>

            <Text style = {styles.categoriesText}>Categories</Text>

            <View style = {styles.contentContainer}>
                <View style = {styles.subjectsContainer}>

                    <Link href = "../(stacks)/MainSceneScreen">
                        <TouchableWithoutFeedback>
                            <KSubjectComponent icon={"rocket"} title={"Physics"}/>
                        </TouchableWithoutFeedback>
                    </Link>

                    <KSubjectComponent icon={"cow"} title={"Biology"}/>
                    <KSubjectComponent icon={"computer"} title={"Informatics"}/>
                </View>
            </View>

            <StatusBar backgroundColor={Colors.background} />
        </View>
    )
}