import {Text, TouchableOpacity, TouchableWithoutFeedback, View} from "react-native";
import {styles} from "@/styles/screens/PhysicsModulesScreen.styles";
import {useFonts} from "expo-font";
import {KContainer} from "@/components/KContainer";
import Feather from '@expo/vector-icons/Feather';
import {Link} from "expo-router";
import {KModuleComponent} from "@/components/KModuleComponent";
import {KSpacer} from "@/components/KSpacer";

type KSubjectScreenProps = {
    subject: string,
    module: string,
    pathToModule: string
    description: string,

}

export default function KSubjectScreen(props: KSubjectScreenProps) {

    return (
        <KContainer>
            <View style = {{flexDirection: "row", maxWidth: "90%", gap: "10%", alignItems: "center"}}>
                <TouchableOpacity>
                    <Link push href = "../(tabs)/HomeScreen">
                        <Feather name="arrow-left-circle" size={30} color="#000"/>
                    </Link>
                </TouchableOpacity>
                <Text style = {styles.titleText}>{props.subject}</Text>
            </View>

            <KSpacer size={10}/>
            <Text style = {styles.categoriesText}>Modules</Text>

            <Text style = {styles.subtitleText}>Press on a category to enter the AR world</Text>
            <KSpacer size={20}/>

            <View style = {styles.contentContainer}>
                <TouchableWithoutFeedback>
                    <Link href = {`./${props.pathToModule}`}>
                        <KModuleComponent title={props.module} description={props.description}/>
                    </Link>
                </TouchableWithoutFeedback>
            </View>
        </KContainer>
    )
}